import { motion } from 'framer-motion'
import { PieChart, Lock, Users, Zap, TrendingUp, Shield } from 'lucide-react'

const Tokenomics = () => {
  const tokenData = [
    { 
      label: 'Liquidity Pool', 
      percentage: 50, 
      color: '#ffd700', 
      icon: Lock,
      description: 'Locked forever for stability'
    },
    { 
      label: 'Public Sale', 
      percentage: 30, 
      color: '#ff6b35', 
      icon: Users,
      description: 'Available for community'
    },
    { 
      label: 'Marketing', 
      percentage: 10, 
      color: '#e91e63', 
      icon: TrendingUp,
      description: 'Battle promotion & partnerships'
    },
    { 
      label: 'Development', 
      percentage: 5, 
      color: '#9c27b0', 
      icon: Zap,
      description: 'Platform improvements'
    },
    { 
      label: 'Reserve', 
      percentage: 5, 
      color: '#00bcd4', 
      icon: Shield,
      description: 'Emergency fund & listings'
    }
  ]

  // No extra features, only liquidity locked is shown above
  // No extra features to show

  // Only show total supply, token name, ticker, contract address
  const stats = [
    { label: 'Total Supply', value: '1,000,000,000', suffix: '$trelon' },
    // { label: 'Total Supply (1B)', value: '1B', suffix: '$trelon' },
    { label: 'Token Name', value: 'TRELON legend', suffix: '' },
    { label: 'Ticker', value: '$trelon', suffix: '' },
    { label: 'Contract Address', value: '0xYourContractAddressHere', suffix: '' }
  ]

  return (
    <section id="tokenomics" className="tokenomics">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <PieChart className="title-icon" />
            Tokenomics
          </h2>
          <p className="section-subtitle">
            Fair distribution for the ultimate meme battle
          </p>
        </motion.div>        {/* Token Distribution Chart */}
        <div className="tokenomics-content">
          {/* Chart Section */}
          <motion.div
            className="chart-section"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="modern-chart">
              <div className="chart-title-section">
                <h3 className="chart-main-title">$trelon Distribution</h3>
                <p className="chart-subtitle">Total Supply: 1B Tokens</p>
              </div>
              
              <div className="chart-bars-container">
                {tokenData.map((item, index) => (                  <motion.div
                    key={item.label}
                    className="chart-bar-item"
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: `${Math.min(item.percentage * 2.5, 140)}px`, opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      className="chart-bar"
                      style={{ 
                        backgroundColor: item.color,
                        height: `${Math.min(item.percentage * 2.5, 140)}px`,
                        boxShadow: `0 0 20px ${item.color}40`
                      }}
                    >
                      <div className="bar-glow" style={{ backgroundColor: item.color }}></div>
                    </div>
                    <div className="bar-info">
                      <div className="bar-icon" style={{ backgroundColor: item.color }}>
                        <item.icon size={16} />
                      </div>
                      <span className="bar-percentage">{item.percentage}%</span>
                      <span className="bar-label">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>          {/* Details Section */}
          <motion.div
            className="chart-details-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="details-header">
              <h3 className="details-title">Token Allocation Details</h3>
              <p className="details-subtitle">Transparent distribution breakdown</p>
            </div>
            <div className="chart-legend">
              {tokenData.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="legend-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="legend-text">
                    <span className="legend-label">{item.label} ({item.percentage}%)</span>
                    <span className="legend-desc">{item.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Token Stats */}
        <motion.div
          className="token-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="stat-value">
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        {/* No extra features to show */}
      </div>
    </section>
  )
}

export default Tokenomics
