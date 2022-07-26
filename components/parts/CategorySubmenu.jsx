import Link from 'next/link'

export default function CategorySubmenu () {
  const links = [
    {
      href: '/',
      title: 'Móveis e eletros',
      icon: {
        name: 'desktop-outline',
        type: 'icon-moveis-e-eletros'
      }
    },
    {
      href: '/',
      title: 'Moda',
      icon: {
        name: 'shirt-outline',
        type: 'icon-moda'
      }
    },
    {
      href: '/',
      title: 'Smarthphones',
      icon: {
        name: 'phone-portrait-outline',
        type: 'icon-smartphones'
      }
    },
    {
      href: '/',
      title: 'Notebooks',
      icon: {
        name: 'laptop-outline',
        type: 'icon-notebooks'
      }
    },
  ]

  return(
    <ul className='shadow box-categories'>
      {
        links.map((item, index) => {
          return(
            <li key={index}>
              <Link href={item.href}>
                <a className="item">
                  <div className={`icon ${item.icon.type}`}>
                    <ion-icon name={item.icon.name}></ion-icon>
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