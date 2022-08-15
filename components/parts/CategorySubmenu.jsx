import Link from 'next/link'

export default function CategorySubmenu () {
  const links = [
    {
      href: '/',
      title: 'Melhores ofertas',
      icon: {
        name: 'star',
        type: 'color-melhores-ofertas'
      }
    },
    {
      href: '/',
      title: 'Casa e Móveis',
      icon: {
        name: 'home-outline',
        type: 'color-casa-e-moveis'
      }
    },
    {
      href: '/',
      title: 'Cama mesa e banho',
      icon: {
        name: 'bed-outline',
        type: 'color-cama-mesa-e-banho'
      }
    },
    {
      href: '/',
      title: 'Eletrodomésticos',
      icon: {
        name: 'desktop-outline',
        type: 'color-eletrodomesticos'
      }
    },
    {
      href: '/',
      title: 'Eletrônicos',
      icon: {
        name: 'headset-outline',
        type: 'color-eletronicos'
      }
    },
    {
      href: '/',
      title: 'Smarthphones',
      icon: {
        name: 'phone-portrait-outline',
        type: 'color-smartphones'
      }
    },
    {
      href: '/',
      title: 'Notebooks',
      icon: {
        name: 'laptop-outline',
        type: 'color-notebooks'
      }
    },
    {
      href: '/',
      title: 'Moda',
      icon: {
        name: 'shirt-outline',
        type: 'color-moda'
      }
    },
    {
      href: '/',
      title: 'Cosméticos',
      icon: {
        name: 'flower-outline',
        type: 'color-cosmeticos'
      }
    },
    {
      href: '/',
      title: 'Fitness e Esportes',
      icon: {
        name: 'barbell-outline',
        type: 'color-fitness'
      }
    },
    {
      href: '/',
      title: 'Livros',
      icon: {
        name: 'book-outline',
        type: 'color-livros'
      }
    },
  ]

  return(
    <ul className='box-categories'>
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