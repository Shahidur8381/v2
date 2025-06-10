import { motion } from 'framer-motion'
import { Twitter, MessageCircle, TrendingUp, Heart, Mail } from 'lucide-react'
import logo from '../images/logo.jpg'

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: MessageCircle, label: 'Telegram', url: '#', color: '#0088cc' },
    { icon: TrendingUp, label: 'Dexscreener', url: '#', color: '#00D4AA' }
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Gallery', href: '#gallery' }
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Disclaimer', href: '#' },
    { label: 'Contact', href: '#' }
  ]

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              <img src={logo} alt="Beef Off" />
              <div className="footer-brand-text">
                <h3>THE GREAT BEEF-OFF</h3>
                <p>Trump vs Elon - The Ultimate Battle</p>
              </div>
            </motion.div>
            <p className="footer-description">
              Join the most epic meme battle in crypto history. Choose your side, 
              hodl tight, and may the best meme win! 🚀
            </p>
            <div className="footer-stats">
              <div className="stat">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Holders</span>
              </div>
              <div className="stat">
                <span className="stat-number">$10M+</span>
                <span className="stat-label">Market Cap</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Trading</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="footer-section">
            <h4>Join the Battle</h4>
            <div className="footer-social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="footer-social-card"
                  style={{ '--social-color': social.color } as React.CSSProperties}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={24} />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
            <div className="newsletter">
              <h5>Stay Updated</h5>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <motion.button
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={16} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              {legalLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="contract-address">
              <h5>Contract Address</h5>
              <div className="address-box">
                <code>0x123...abc</code>
                <motion.button
                  className="copy-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Copy
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 The Great Beef-Off. All rights reserved. 
              <span className="disclaimer"> | Not financial advice | DYOR</span>
            </p>
            <div className="footer-heart">
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ff1744', '#ffd700', '#ff1744']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
              <span>for the community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
