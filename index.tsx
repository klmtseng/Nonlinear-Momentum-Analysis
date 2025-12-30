import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BookOpen, 
  Database, 
  Code, 
  TrendingUp, 
  Cpu, 
  FileText, 
  Download,
  ExternalLink,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

const PaperAnalysisApp = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const NavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`flex items-center w-full px-4 py-3 text-sm font-medium transition-colors duration-200 ${
        activeSection === id 
          ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon className="w-4 h-4 mr-3" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-white z-50 border-b px-4 py-3 flex justify-between items-center shadow-sm">
        <span className="font-serif font-bold text-lg">NLTSMOM</span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed md:sticky top-12 md:top-0 h-[calc(100vh-3rem)] md:h-screen w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 z-40 overflow-y-auto
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-100">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mb-4 text-white font-serif font-bold text-xl">
            N
          </div>
          <h1 className="font-serif font-bold text-xl leading-tight mb-1">Nonlinear Momentum</h1>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Paper Analysis</p>
        </div>
        
        <div className="py-4">
          <NavItem id="abstract" label="Abstract" icon={BookOpen} />
          <NavItem id="data" label="Data Set" icon={Database} />
          <NavItem id="model" label="The Model" icon={Cpu} />
          <NavItem id="visualization" label="Concept Visual" icon={TrendingUp} />
          <NavItem id="implementation" label="Implementation" icon={Code} />
          <NavItem id="conclusion" label="Conclusion" icon={FileText} />
          <NavItem id="application" label="Real World" icon={CheckCircle} />
        </div>

        <div className="p-6 mt-auto">
          <div className="bg-gray-50 rounded-lg p-4 text-xs text-gray-500">
            <p className="font-semibold mb-1">Source Paper:</p>
            <p className="italic mb-2">"Nonlinear Time Series Momentum"</p>
            <p>Moskowitz, Sabbatucci, Tamoni, Uhl (2025)</p>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 md:ml-0 pt-16 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24">
          
          {/* Hero / Abstract */}
          <section id="abstract" className="scroll-mt-24">
            <div className="mb-6 inline-flex items-center space-x-2 text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              <BookOpen className="w-3 h-3" />
              <span>Executive Summary</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              A persistent nonlinear relationship between price trends and risk-adjusted returns.
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Standard Time Series Momentum (TSMOM) assumes a linear relationship: the stronger the trend, the larger the position. This paper challenges that dogma using machine learning.
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-700 p-6 my-8">
                <p className="font-serif italic text-xl text-gray-800">
                  "Investors maximize risk-adjusted returns by muting their reaction to extreme, noisy signals."
                </p>
              </div>
              <p>
                The authors demonstrate that using <strong>Neural Networks</strong> to uncover an "S-shaped" signal weighting strategy yields superior economic and statistical performance compared to linear models, specifically by reducing exposure during overcrowded or extreme trend phases.
              </p>
            </div>
          </section>

          {/* Data Set */}
          <section id="data" className="scroll-mt-24 border-t border-gray-100 pt-16">
            <div className="flex items-center mb-6">
              <Database className="w-6 h-6 text-blue-700 mr-3" />
              <h3 className="font-serif text-2xl font-bold">The Data Set</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Scope</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Period:</strong> Jan 1980 – Oct 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Frequency:</strong> Daily data (aggregated to weekly/monthly)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Continuous:</strong> Front-month futures rolled generically</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">55 Global Markets</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase">Equities (8)</span>
                    <p className="text-sm text-gray-700">SPX, FTSE, DAX, Nikkei, etc.</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase">Commodities (24)</span>
                    <p className="text-sm text-gray-700">Energies (Crude, Brent), Metals (Gold, Copper), Ags (Corn, Soy)</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase">Rates & FX (21)</span>
                    <p className="text-sm text-gray-700">US Treasuries (2y-10y), Bunds, G10 Currencies vs USD</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Model & Viz */}
          <section id="model" className="scroll-mt-24 border-t border-gray-100 pt-16">
             <div className="flex items-center mb-6">
              <Cpu className="w-6 h-6 text-blue-700 mr-3" />
              <h3 className="font-serif text-2xl font-bold">The Model</h3>
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl">
              The core innovation is replacing the linear function $w_t = c \cdot r_{'{'}t-1{'}'}$ with a nonlinear function $w_t = f(r_{'{'}t-1{'}'})$ estimated via a Neural Network.
            </p>

            {/* Visualization */}
            <div id="visualization" className="bg-slate-900 rounded-2xl p-8 text-white mb-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <TrendingUp size={120} />
              </div>
              
              <h4 className="text-lg font-bold mb-2">Signal Weighting: Linear vs. Nonlinear</h4>
              <p className="text-slate-400 text-sm mb-8">The "S-Curve" dampens extreme signals to manage risk.</p>

              <div className="h-64 w-full flex items-end justify-center relative">
                {/* SVG Chart */}
                <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#334155" strokeWidth="1" />
                  <line x1="200" y1="0" x2="200" y2="200" stroke="#334155" strokeWidth="1" />
                  
                  {/* Labels */}
                  <text x="380" y="115" fill="#94a3b8" fontSize="10" textAnchor="end">Signal Strength (+)</text>
                  <text x="20" y="115" fill="#94a3b8" fontSize="10" textAnchor="start">Signal Strength (-)</text>
                  <text x="210" y="10" fill="#94a3b8" fontSize="10">Position Size (+)</text>

                  {/* Linear Line */}
                  <path d="M 50 175 L 350 25" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                  <text x="320" y="40" fill="#64748b" fontSize="10">Standard Linear TSMOM</text>

                  {/* S-Curve (Nonlinear) */}
                  {/* Approximated sigmoid/tanh shape manually for SVG */}
                  <path d="M 50 160 C 120 160, 150 150, 200 100 C 250 50, 280 40, 350 40" stroke="#3b82f6" strokeWidth="4" fill="none" />
                  <text x="320" y="60" fill="#3b82f6" fontWeight="bold" fontSize="10">Nonlinear (Neural Net)</text>
                  
                  {/* Annotations */}
                  <circle cx="340" cy="40" r="4" fill="#3b82f6" />
                  <text x="340" y="30" fill="#3b82f6" fontSize="10" textAnchor="middle">Rollback / Capping</text>
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-400">
                <div className="bg-slate-800 p-3 rounded">
                  <span className="block text-white font-bold mb-1">Linear Zone</span>
                  For small to moderate trends, the model behaves like standard momentum.
                </div>
                <div className="bg-slate-800 p-3 rounded">
                  <span className="block text-white font-bold mb-1">Saturation Zone</span>
                  For extreme trends (>2 SD), the model reduces position size (risk reduction).
                </div>
              </div>
            </div>
          </section>

          {/* Implementation / Code */}
          <section id="implementation" className="scroll-mt-24 border-t border-gray-100 pt-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Code className="w-6 h-6 text-blue-700 mr-3" />
                <h3 className="font-serif text-2xl font-bold">Code Specification</h3>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Python / Keras</span>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg text-sm font-mono text-gray-300 leading-relaxed">
              <div className="bg-gray-800 px-4 py-2 flex justify-between items-center border-b border-gray-700">
                <span>model_config.py</span>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 overflow-x-auto">
<pre>{`import tensorflow as tf
from tensorflow import keras

def build_nltsmom_model(input_dim=1):
    """
    Replication of the architecture described in Section 3.3.
    """
    model = keras.Sequential([
        # Input: Volatility-scaled past returns
        keras.layers.InputLayer(input_shape=(input_dim,)),
        
        # Hidden Layer 1: tanh activation for nonlinearity
        keras.layers.Dense(
            units=8, # Tested with 2, 4, 8, 16
            activation='tanh',
            kernel_regularizer=keras.regularizers.l2(0.01)
        ),
        
        # Dropout for regularization
        keras.layers.Dropout(0.25),
        
        # Output Layer: Linear activation (forecast)
        # Constraint: Bias = 0 (Market Neutrality)
        keras.layers.Dense(
            units=1, 
            activation='linear', 
            use_bias=False
        )
    ])
    
    # Optimization: Maximize Sharpe Ratio (Custom Loss required)
    optimizer = keras.optimizers.Adam(learning_rate=0.001)
    
    return model

# Training Parameters
BATCH_SIZE = 1024
EPOCHS = 50
VALIDATION_SPLIT = 0.2
`}</pre>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">
              Note: The paper emphasizes training to maximize the Sharpe Ratio directly, rather than minimizing Mean Squared Error (MSE).
            </p>
          </section>

          {/* Real World Application */}
          <section id="application" className="scroll-mt-24 border-t border-gray-100 pt-16 pb-20">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-blue-700 mr-3" />
              <h3 className="font-serif text-2xl font-bold">Real World Application</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3">1. Modify Sizing</h4>
                <p className="text-blue-800 text-sm">
                  Don't scale size linearly with trend strength. Implement a capping mechanism. If a trend is >2 standard deviations, reduce exposure.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3">2. Crisis Alpha</h4>
                <p className="text-blue-800 text-sm">
                  Use this strategy as a tail hedge. It performs significantly better during market crashes than standard momentum because it avoids "overcrowded" reversal risks.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3">3. Construction</h4>
                <p className="text-blue-800 text-sm">
                  Normalize all signals by volatility. Re-train the nonlinear function annually to adapt to changing market regimes.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 text-sm">
            <div>
              <p className="font-bold text-gray-900">Nonlinear Time Series Momentum</p>
              <p>Analysis generated for educational purposes.</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
               <a href="#" className="hover:text-blue-700 transition-colors flex items-center">
                 Download Paper <ExternalLink className="w-3 h-3 ml-1" />
               </a>
               <a href="#" className="hover:text-blue-700 transition-colors flex items-center">
                 Export Analysis <Download className="w-3 h-3 ml-1" />
               </a>
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<PaperAnalysisApp />);