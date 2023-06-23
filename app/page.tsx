import BackgroundImage from '../components/BackgroundImage'
import FooterContainer from '../components/FooterContainer'
import MainContainer from '../components/MainContainer'

import styles from './page.module.css'

const Teaser = () => (
  <>
    <BackgroundImage />
    <main className={styles.main}>
      <div className={styles.glitch}>
        <MainContainer />
      </div>
    </main>
    <FooterContainer />
  </>
)

export default Teaser
