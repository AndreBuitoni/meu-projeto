import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer () {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
        <li><FaYoutube /></li>
      </ul>
      
      <p>Site Desenvolvido por André Buitoni</p>
    </footer>
  )
}

export default Footer