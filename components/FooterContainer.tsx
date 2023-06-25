import Link from 'next/link'
import { AiFillGithub,AiFillTwitterCircle } from 'react-icons/ai'

import * as styles from '@/components/FooterContainer.css'

const FooterContainer = () => (
  <footer className={styles.root}>
    <div>Created by AVERU</div>
    <div className={styles.lastChildDiv}>
      <Link href='https://twitter.com/_averu_' target='_blank'>
        <AiFillTwitterCircle size={30} />
      </Link>
    </div>
    <div>
      <Link href='https://github.com/averu/aibunko' target='_blank'>
        <AiFillGithub size={30} />
      </Link>
    </div>
  </footer>
)

export default FooterContainer
