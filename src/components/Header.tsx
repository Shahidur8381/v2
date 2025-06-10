import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X ,MessageCircle, TrendingUp } from 'lucide-react'
import logo from '../images/logo.jpg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Gallery', href: '#gallery' }
  ]

  const socialLinks = [
    {
      name: 'Telegram',
      icon: MessageCircle,
      url: 'https://t.me/trelononsolportal',
      color: '#0088cc'
    },
    {
      name: 'X.com',
      icon: X,
      url: 'https://x.com/trelononsol',
      color: '#1DA1F2'
    },
    {
      name: 'Dexscreener',
      icon: TrendingUp,
      url: 'https://dexscreener.com/',
      color: '#00D4AA'
    }
  ]

  return (    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <motion.div 
          className="header-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={logo} alt="TRELON Legend Logo" />
          <span>TRELON legend</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, color: '#ffd700' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="header-social">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="header-social-link"
              style={{ '--social-color': social.color } as React.CSSProperties}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Buy Button */}
        <motion.button
          className="header-buy-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BUY NOW
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0, 
          opacity: isMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-nav-content">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                x: isMenuOpen ? 0 : -50, 
                opacity: isMenuOpen ? 1 : 0 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <div className="mobile-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="mobile-social-link"
                style={{ '--social-color': social.color } as React.CSSProperties}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </motion.header>
  )
}

export default Header
