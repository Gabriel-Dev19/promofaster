import Link from 'next/link'

export default function CategorySubmenu ({ links }) {

  return(
    <ul className='box-categories'>
      {
        links.map((item, index) => {
          return(
            <li key={index}>
              <Link href={'/categorias/' + item.slug}>
                <a className="item">
                  <div className={`icon`}>
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