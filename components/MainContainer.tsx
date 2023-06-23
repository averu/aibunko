import Image from 'next/image'

import * as styles from '@/components/MainContainer.css'

const MainContainer = () => (
  <div className={styles.root}>
    <Image
      src='/logo.svg'
      alt=''
      width={1980}
      height={1150}
      sizes='100vw'
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  </div>
)

export default MainContainer
