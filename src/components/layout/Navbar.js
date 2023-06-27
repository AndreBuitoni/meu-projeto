import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar () {
  return (
    <section className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}><Link to="/">Página Inicial</Link></li>
        <li className={styles.item}><Link to="/empresa">Sobre Nós</Link></li>
        <li className={styles.item}><Link to="/contato">Contato</Link></li>
        <li className={styles.item}><Link to="/fotografias">Álbum de Fotos</Link></li>
        <li className={styles.item}><Link to="/downloads">Downloads</Link></li>
      </ul>
    </section>
  )
}

export default Navbar