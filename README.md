# Nonlinear Time Series Momentum (NLTSMOM)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-academic_analysis-green.svg)

This repository contains an analysis, visualization, and implementation guide based on the academic paper **"Nonlinear Time Series Momentum"**.

**Source:** Tobias J. Moskowitz, Riccardo Sabbatucci, Andrea Tamoni, and Björn Uhl (December 17, 2025).

---

## 📄 Abstract

The paper documents a persistent **nonlinear relationship** between price trends and risk-adjusted returns across various markets and asset classes. 

Standard Time Series Momentum (TSMOM) strategies scale positions linearly with the strength of the trend. This research demonstrates that this linear assumption is suboptimal. By using **Machine Learning (Neural Networks)**, the authors uncover an "S-shaped" optimal weighting function. This function suggests that investors should **dampen or reduce exposure** when trends become extreme (overcrowded), rather than increasing it.

This nonlinear strategy (NLTSMOM) yields strategies that are economically and statistically superior to standard linear models, particularly in out-of-sample testing and during market crashes ("Crisis Alpha").

## 📊 Data Set

The analysis covers a comprehensive set of liquid futures contracts.

*   **Time Horizon:** January 1980 – October 2024.
*   **Universe:** 55 Front-month futures contracts.
    *   **Equity Indices (8):** e.g., SPX, FTSE, DAX, Nikkei 225.
    *   **Commodities (24):** Energies (Crude, Heating Oil), Metals (Gold, Copper), Agriculturals (Corn, Soybeans).
    *   **Interest Rates & FX (21):** US Treasuries (2y, 5y, 10y), Bunds, and major currencies against the USD.
*   **Methodology:** Futures are continuously rolled. Data is processed at daily frequencies, often aggregated to weekly or monthly signals for trading.

## 🧠 The Model

The core innovation is replacing the linear weighting function $w_t = c \cdot r_{t-1}$ with a nonlinear function $w_t = f(r_{t-1})$ estimated via a Neural Network.

### Architecture
The paper utilizes a standard Feed-Forward Neural Network (MLP):

*   **Input:** Volatility-scaled past returns (Trend Signal).
*   **Hidden Layers:** 1 to 2 hidden layers using **Hyperbolic Tangent (`tanh`)** activation to capture the concave/convex nature of the S-curve.
*   **Output Layer:** Linear activation.
*   **Optimization:** The model is trained to maximize the **Sharpe Ratio** directly, rather than minimizing Mean Squared Error (MSE).
*   **Constraint:** The bias is constrained to zero to ensure market neutrality (shorting a negative trend is equivalent to going long a positive trend).

## 💻 Code Implementation

Below is a `TensorFlow/Keras` implementation of the architecture described in Section 3.3 of the paper.

```python
import tensorflow as tf
from tensorflow import keras

def build_nltsmom_model(input_dim=1):
    """
    Builds the Nonlinear TSMOM model.
    """
    model = keras.Sequential([
        # Input: Volatility-scaled past returns
        keras.layers.InputLayer(input_shape=(input_dim,)),
        
        # Hidden Layer: tanh activation creates the 'S-Curve'
        keras.layers.Dense(
            units=8, 
            activation='tanh',
            kernel_regularizer=keras.regularizers.l2(0.01)
        ),
        
        # Regularization to prevent overfitting
        keras.layers.Dropout(0.25),
        
        # Output: Position sizing (Forecast)
        # use_bias=False ensures f(0) = 0
        keras.layers.Dense(
            units=1, 
            activation='linear', 
            use_bias=False
        )
    ])
    
    # Optimizer
    optimizer = keras.optimizers.Adam(learning_rate=0.001)
    
    return model
```

## 🌍 Real-World Application

Practitioners and Quant researchers can apply these findings to improve trend-following portfolios:

1.  **Signal Transformation:** Apply an S-curve transformation to raw momentum signals.
2.  **Risk Management (Capping):** If a trend exceeds historical extremes (e.g., >2 standard deviations), reduce position size instead of increasing it. Extreme trends often precede reversals.
3.  **Tail Hedging:** Allocate to NLTSMOM for better downside protection. The strategy adapts faster to market crashes than linear models, preserving capital during "bad" times.

## 📚 Citation

```text
Moskowitz, T. J., Sabbatucci, R., Tamoni, A., & Uhl, B. (2025). 
Nonlinear Time Series Momentum. 
Available at SSRN or NBER.
```