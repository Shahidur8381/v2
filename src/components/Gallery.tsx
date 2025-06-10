import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/imp4.jpg'

const Gallery = () => {
  const galleryImages = [
    { 
      src: img1, 
      title: 'The Trump Card', 
      description: 'When politics meets memes',
      category: 'trump'
    },
    { 
      src: img2, 
      title: 'Elon\'s Vision', 
      description: 'To Mars and beyond',
      category: 'elon'
    },
    { 
      src: img3, 
      title: 'Epic Showdown', 
      description: 'The battle intensifies',
      category: 'battle'
    },
    { 
      src: img4, 
      title: 'Meme Magic', 
      description: 'Pure internet gold',
      category: 'meme'
    },
    { 
      src: img1, 
      title: 'Political Power', 
      description: 'The art of the deal',
      category: 'trump'
    },
    { 
      src: img2, 
      title: 'Tech Titan', 
      description: 'Innovation at its finest',
      category: 'elon'
    }
  ]

  const categories = [
    { label: 'All', value: 'all', color: '#ffd700' },
    { label: 'Trump', value: 'trump', color: '#ff1744' },
    { label: 'Elon', value: 'elon', color: '#2196F3' },
    { label: 'Battle', value: 'battle', color: '#9C27B0' },
    { label: 'Memes', value: 'meme', color: '#4CAF50' }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <ImageIcon className="title-icon" />
            Battle Gallery
          </h2>
          <p className="section-subtitle">
            Epic moments captured from the greatest meme war of all time
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="gallery-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.value}
              className="filter-btn active"
              style={{ '--category-color': category.color } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="gallery-image-container">
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                    <div className={`category-badge ${image.category}`}>
                      {image.category}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Stats */}
        <motion.div
          className="gallery-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Memes Created</p>
          </div>
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Views Daily</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Viral Moments</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>New Content</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          className="gallery-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Share Your Beef Memes</h3>
          <p>
            Got an epic Trump vs Elon meme? Share it with our community 
            and get featured in our gallery!
          </p>
          <div className="cta-buttons">
            <motion.button
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Meme
            </motion.button>
            <motion.button
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Discord
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Gallery
