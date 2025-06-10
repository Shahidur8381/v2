import './Socials.css';
import dexLogo from '../images/dex.png';

const socials = [
  {
    name: 'Telegram',
    url: 'https://t.me/yourchannel',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg',
    alt: 'Telegram Logo',
  },
  {
    name: 'X.com',
    url: 'https://x.com/yourprofile',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
    alt: 'X.com Logo',
  },
  {
    name: 'Dexscreener',
    url: 'https://dexscreener.com/',
    logo: dexLogo,
    alt: 'Dexscreener Logo',
  },
];

const Socials = () => (
  <section id="socials" className="socials-section">
    <div className="container">
      <h2 className="socials-title">Join Our Socials</h2>
      <div className="socials-links">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.logo} alt={social.alt} className="social-logo" />
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Socials;
