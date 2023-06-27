import styles from './Fotografias.module.css'

function Fotografias () {
  return (
    <div>
      <div>
        <h1>Álbum de Fotos</h1>
        <p>Escolha qual álbum você gostaria de ver.</p>
      </div>
      <div className={styles.allAlbuns}>

        <div className={styles.container}> Berlim 2022
          <a target='_blank' href="images/berlim/capa-berlim.jpg"><img className={styles.capaAlbum} src="images/berlim/capa-berlim.jpg" alt="Imagem do André de braços cruzados em Berlim, na frente do Portão de Brandenburgo." /></a>
          <div className={styles.middle}>
            <div className={styles.btn}>
              Acesse as fotos
            </div>
          </div>
        </div>

        <div className={styles.container}> Santos 2022
          <img className={styles.capaAlbum} src="/images/santos/london1.jpg" alt="Nos na Italia" />
          <div className={styles.middle}>
            <div className={styles.btn}>
              Acesse as fotos
            </div>
          </div>
        </div>

        <div className={styles.container}> Nosso Casamento
          <img className={styles.capaAlbum} src="/images/album-casamento/capa-casamento.jpg" alt="Imagem do André e da Paulinha com roupas de casamento e, entre o casal, uma mesa de doces com um bolo no centro." />
          <div className={styles.middle}>
            <div className={styles.btn}>
              Acesse as fotos
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Fotografias