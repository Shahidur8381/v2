import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Clock, Rocket, Target, Trophy, Zap, Globe } from 'lucide-react'

const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Battle Initiation',
      period: 'Q1 2025',
      status: 'active', // changed from completed to active
      icon: Rocket,
      color: '#ffd700',
      items: [
        'Token Launch & Fair Distribution',
        'Liquidity Pool Creation',
        'Community Building',
        'Social Media Presence',
        'First Battle Memes Released'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'The Beef Escalates',
      period: 'Q2 2025',
      status: 'active',
      icon: Zap,
      color: '#ffd700',
      items: [
        'Major CEX Listings',
        'NFT Collection Launch',
        'Battle Arena Game Development',
        'Influencer Partnerships',
        'Community Governance Launch'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Global Domination',
      period: 'Q3 2025',
      status: 'upcoming',
      icon: Globe,
      color: '#2196F3',
      items: [
        'Mobile App Release',
        'Cross-Chain Bridge',
        'Metaverse Integration',
        'Celebrity Endorsements',
        'International Expansion'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Ultimate Victory',
      period: 'Q4 2025',
      status: 'upcoming',
      icon: Trophy,
      color: '#9C27B0',
      items: [
        'DeFi Ecosystem Launch',
        'Battle Tournament Platform',
        'Real-World Utilities',
        'Mainstream Adoption',
        'Legendary Status Achieved'
      ]
    }
  ]

  const milestones = [
    { target: '10K Holders', achieved: false, count: '25K+' },
    { target: '$1M Market Cap', achieved: false, count: '$10M+' },
    { target: '100K Twitter Followers', achieved: false, count: '150K+' },
    { target: 'Major Exchange Listing', achieved: false, count: 'Coming Soon' },
    { target: '1M Holders', achieved: false, count: 'Q3 2025' }
  ]

  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <Target className="title-icon" />
            Battle Roadmap
          </h2>
          <p className="section-subtitle">
            Our journey to meme supremacy and beyond
          </p>
        </motion.div>

        {/* Milestones */}
        <motion.div
          className="milestones"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="milestones-title">Key Milestones</h3>
          <div className="milestones-grid">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.target}
                className={`milestone-card ${milestone.achieved ? 'achieved' : 'pending'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="milestone-icon">
                  <Clock size={24} color="#ffd700" />
                </div>
                <h4>{milestone.target}</h4>
                <p className="milestone-count">{milestone.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="roadmap-timeline">
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              className={`roadmap-phase ${phase.status}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="phase-line" />
              
              <motion.div
                className="phase-icon"
                style={{ backgroundColor: phase.color }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <phase.icon size={24} color="#fff" />
              </motion.div>

              <motion.div
                className="phase-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="phase-header">
                  <div className="phase-badge" style={{ backgroundColor: phase.color }}>
                    {phase.phase}
                  </div>
                  <div className="phase-period">
                    <Calendar size={16} />
                    {phase.period}
                  </div>
                </div>

                <h3 className="phase-title">{phase.title}</h3>
                
                <ul className="phase-items">
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle 
                        size={16} 
                        color={phase.status === 'completed' ? '#4CAF50' : '#888'} 
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className={`phase-status status-${phase.status}`}>
                  {phase.status === 'completed' && '✅ Completed'}
                  {phase.status === 'active' && '🔥 In Progress'}
                  {phase.status === 'upcoming' && '⏳ Coming Soon'}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="roadmap-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Join the Battle Early</h3>
          <p>
            Don't miss out on the epic journey! Get your $BEEF tokens now and 
            be part of the greatest meme battle in crypto history.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="btn-icon" />
              Buy $TRELON Now
            </motion.button>
            <a href="https://t.me/trelononsolportal" target='blank'>
            <motion.button
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Community
            </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap
