import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Crown } from 'lucide-react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import logo from '../images/logo.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <motion.div 
        className="animated-bg"
      >
        <div className="floating-shapes">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              animate={{
                y: [0, -100, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.div>
          <br /><br />
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div 
            className="logo-container"
            style={{
              x: mousePosition.x,
              y: mousePosition.y
            }}
          >
            <motion.img
              src={logo}
              alt="Beef Off Logo"
              className="main-logo"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.h1
            className="main-title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="gradient-text">TRELON</span>
            <br />
            <span className="beef-text">legend</span>
            <br />
            <span className="vs-text">$TRELON</span>
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            The ultimate meme battle has begun! Choose your side in the most epic 
            crypto showdown of all time. Who will reign supreme in this legendary beef?
          </motion.p>          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button
              className="buy-button"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="button-icon" />
              BUY $TRELON NOW
            </motion.button>
            
            {/* Contact Address */}
            <motion.div
              className="contact-address"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <p className="address-label">Contract Address:</p>
              <div className="address-container">
                <span className="address-text">Coming Soon...</span>
              </div>
            </motion.div>
            
            <div className="hero-stats">
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Crown size={20} />
                <span>Total Supply: 1,000,000,000 $TRELON</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Battle Images */}
        <motion.div 
          className="battle-images"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="battle-side trump-side"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              y: [0, -10, 0],
              boxShadow: ['0 10px 30px rgba(255, 0, 0, 0.3)', '0 20px 60px rgba(255, 0, 0, 0.5)', '0 10px 30px rgba(255, 0, 0, 0.3)']
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity },
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          >
            <img src={img1} alt="Trump Side" />
            <div className="side-label trump-label">TEAM TRUMP</div>
          </motion.div>

          <motion.div 
            className="vs-divider"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span>VS</span>
            <div className="lightning-bolt">⚡</div>
          </motion.div>

          <motion.div
            className="battle-side elon-side"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              y: [0, 10, 0],
              boxShadow: ['0 10px 30px rgba(0, 100, 255, 0.3)', '0 20px 60px rgba(0, 100, 255, 0.5)', '0 10px 30px rgba(0, 100, 255, 0.3)']
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, delay: 1.5 },
              boxShadow: { duration: 2, repeat: Infinity, delay: 0.5 }
            }}
          >
            <img src={img2} alt="Elon Side" />
            <div className="side-label elon-label">TEAM ELON</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
