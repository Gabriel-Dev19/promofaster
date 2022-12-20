import Link from 'next/link'

export default function CategorySubmenu () {
  const links = [
    {
      href: '/',
      title: 'Melhores ofertas',
      icon: {
        name: 'star-outline',
      }
    },
    {
      href: '/',
      title: 'Casa e Móveis',
      icon: {
        name: 'home-outline',
      }
    },
    {
      href: '/',
      title: 'Cama mesa e banho',
      icon: {
        name: 'bed-outline',
      }
    },
    {
      href: '/',
      title: 'Eletrodomésticos',
      icon: {
        name: 'desktop-outline',
      }
    },
    {
      href: '/',
      title: 'Eletrônicos',
      icon: {
        name: 'hardware-chip-outline',
      }
    },
    {
      href: '/',
      title: 'Smarthphones',
      icon: {
        name: 'phone-portrait-outline',
      }
    },
    {
      href: '/',
      title: 'Áudio',
      icon: {
        name: 'headset-outline',
      }
    },
    {
      href: '/',
      title: 'Notebooks',
      icon: {
        name: 'laptop-outline',
      }
    },
    {
      href: '/',
      title: 'Moda',
      icon: {
        name: 'shirt-outline',
      }
    },
    {
      href: '/',
      title: 'Cosméticos',
      icon: {
        name: 'flower-outline',
      }
    },
    {
      href: '/',
      title: 'Fitness e Esportes',
      icon: {
        name: 'barbell-outline',
      }
    }
  ]

  return(
    <ul className='box-categories'>
      {
        links.map((item, index) => {
          return(
            <li key={index}>
              <Link href={item.href}>
                <a className="item">
                  <div className={`icon`}>
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