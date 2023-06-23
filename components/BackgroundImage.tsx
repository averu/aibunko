import Image from 'next/image'

import * as styles from '@/components/BackgroundImage.css'

const BackgroundImage = () => (
  <div className={styles.root}>
    <Image className={styles.images} src='/background_01.png' alt='' width={1200} height={1691} />
    <Image className={styles.images} src='/background_02.png' alt='' width={1200} height={1691} />
  </div>
)

export default BackgroundImage
