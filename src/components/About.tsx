import { motion } from 'framer-motion'
import { Flame, Crown, Rocket, Zap } from 'lucide-react'

const About = () => {
  const features = [
    { 
      icon: Flame, 
      title: 'Epic Beef Battle', 
      description: 'Witness the ultimate showdown between two titans of our time in the most legendary meme war ever created.'
    },
    { 
      icon: Crown, 
      title: 'Legendary Memes', 
      description: 'Premium quality meme content that captures the essence of the greatest Twitter beef in modern history.'
    },
    { 
      icon: Rocket, 
      title: 'Moon Mission Ready', 
      description: 'Built for astronomical gains with a community-driven approach to achieving meme coin supremacy.'
    },
    { 
      icon: Zap, 
      title: 'Lightning Fast', 
      description: 'Instant transactions and swaps with zero tax transfers for seamless trading experience.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            About The Battle
          </h2>
          <p className="section-subtitle">
            The epic saga that started with tweets and became a legend
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>The Story Behind the Beef</h3>
            <p>
              What started as Twitter banter between two of the world's most influential figures 
              has evolved into the ultimate meme coin phenomenon. The Great Beef-Off captures 
              the essence of this legendary rivalry in a fun, community-driven token that 
              celebrates the absurdity and entertainment value of their epic exchanges.
            </p>
            <p>
              Our community is built on the principle that the best memes come from real events, 
              and nothing has been more meme-worthy than this ongoing saga. Join thousands of 
              holders who believe that sometimes the best investment strategy is just having 
              fun with internet culture.
            </p>
            <div className="story-stats">
              <div className="story-stat">
                <h4>1M+</h4>
                <span>Twitter Mentions</span>
              </div>
              <div className="story-stat">
                <h4>50K+</h4>
                <span>Memes Created</span>
              </div>
              <div className="story-stat">
                <h4>24/7</h4>
                <span>Entertainment</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-vision"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Our Vision</h3>
            <div className="vision-points">
              <div className="vision-point">
                <div className="vision-number">01</div>
                <div className="vision-content">
                  <h4>Meme Supremacy</h4>
                  <p>Become the #1 meme coin that represents internet culture at its finest</p>
                </div>
              </div>
              <div className="vision-point">
                <div className="vision-number">02</div>
                <div className="vision-content">
                  <h4>Community First</h4>
                  <p>Build a strong, engaged community that drives the project forward</p>
                </div>
              </div>
              <div className="vision-point">
                <div className="vision-number">03</div>
                <div className="vision-content">
                  <h4>Utility & Fun</h4>
                  <p>Combine entertainment with real utility in the DeFi ecosystem</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="features-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="features-title">Why Choose Our Beef?</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="team-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="team-title">The Team Behind the Beef</h3>
          <div className="team-description">
            <p>
              Our anonymous team consists of experienced DeFi developers, meme creators, 
              and community builders who understand what it takes to create a successful 
              meme coin project. We're here for the long haul and committed to making 
              this the greatest meme coin battle in crypto history.
            </p>
            <div className="team-values">
              <div className="team-value">
                <h4>🔒 Safe & Secure</h4>
                <p>Liquidity locked forever, contract verified, no backdoors</p>
              </div>
              <div className="team-value">
                <h4>🚀 Community Driven</h4>
                <p>Decisions made by the community, for the community</p>
              </div>
              <div className="team-value">
                <h4>💎 Diamond Hands</h4>
                <p>Long-term vision with sustainable tokenomics</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
