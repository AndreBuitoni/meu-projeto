import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer () {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li className={styles.fafacebook}><FaFacebook /></li>
        <li className={styles.fainstagram}><FaInstagram /></li>
        <li className={styles.falinkedin}><FaLinkedin /></li>
        <li className={styles.fayoutube}><FaYoutube /></li>
      </ul>
      
      <p>Site Desenvolvido por <a href="www.andrebuitoni.com">André Buitoni</a> e <a href="www.paulabuitoni.com">Paula Buitoni</a></p>
      <p>Quer um site parecido com este para você? Entre em <a href="/contato">contato</a> conosco.</p>
    </footer>
  )
}

export default Footer