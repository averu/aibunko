import Link from 'next/link'

import { AiFillTwitterCircle } from 'react-icons/ai'

import * as styles from '@/components/FooterContainer.css'

const FooterContainer = () => (
  <footer className={styles.root}>
    <div>Created by AVERU</div>
    <div className={styles.lastChildDiv}>
      <Link href='https://twitter.com/_averu_' target='_blank'>
        <AiFillTwitterCircle size={30} />
      </Link>
    </div>
  </footer>
)

export default FooterContainer
