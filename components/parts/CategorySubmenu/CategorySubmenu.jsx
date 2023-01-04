import Link from 'next/link'
import styles from './CategorySubmenu.module.scss'

export default function CategorySubmenu ({ links }) {

  return(
    <ul className={styles.box_categories}>
      {
        links.map((item, index) => {
          return(
            <li key={index}>
              <Link href={'/categorias/' + item.slug}>
                <a className={styles.item}>
                  <div className={styles.icon}>
                    <ion-icon name={item.icon}></ion-icon>
                  </div>
                  { item.title }
                </a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}