import Link from 'next/link'
import styles from './AreaLogin.module.scss'

export default function AreaLogin() {
  return(
    <div className={styles.area_login}>
      <div className='d-flex align-items-center'>
        <Link href={'https://alguma-coisa'}>
          <a title='Perfil no instagram' target={'_blank'} rel={'nopeener noreferrer'} className='me-1'>
            <ion-icon name="logo-instagram" />
            insta
          </a>
        </Link>
        <Link href={'/suporte'}>
          <a title='suporte'>
            <ion-icon name="chatbubbles-outline"></ion-icon>
            suporte
          </a>
        </Link>
      </div>
    </div>
  )
}