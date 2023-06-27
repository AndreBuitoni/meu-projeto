import styles from './Header.module.css'

function Header () {
  return (
    <div>
      <img className={styles.banner} src="images/banner-familia-buitoni-cortado-2023.png" alt="imagem estilo banner da família buitoni" />
    </div>
  )
}

export default Header