import Link from 'next/link'
import { useEffect, useState } from 'react'
import CategorySubmenu from './CategorySubmenu'
import { CSSTransition } from 'react-transition-group'
import { useDispatch } from 'react-redux'
import { backdropFalse, backdropTrue } from '../../redux/backDropMask'

export default function LinksNavbar({ linksCategory }) {
  const [showCategory, setShowCategory] = useState(false)
  const dispath = useDispatch()
  var timeoutEnterCategory = undefined

  useEffect(() => { window.addEventListener('resize', () => setShowCategory(false)) })

  useEffect(() => {
    showCategory ? dispath(backdropTrue()) : dispath(backdropFalse())
  }, [dispath, showCategory])

  return(
    <ul className='group-links'>
      <li className='group-items'>
        <div
          className="link-primary"
          onMouseEnter={() => { if (window.innerWidth > 1199.95) { timeoutEnterCategory = setTimeout(() => setShowCategory(true), 200) } }}
          onMouseLeave={() => { if (window.innerWidth > 1199.95) { setShowCategory(false), clearTimeout(timeoutEnterCategory) } }}
          onClick={() => { window.innerWidth < 1199.95 ? setShowCategory(!showCategory) : setShowCategory(true) }}
        >
          <div className="label">
            Categorias <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <CSSTransition
            in={showCategory}
            timeout={2}
            classNames={{
              enter: 'fade-enter',
              enterActive: 'fade-enter-active',
              exit: 'fade-exit',
              exitActive: 'fade-exit-active',
            }}
            unmountOnExit
          >
            <CategorySubmenu links={linksCategory} />
          </CSSTransition>
        </div>
      </li>
      <li className='group-items'>
        <Link href={'/#exclusividades'}>
          <a className='link-primary'>
            <div className="label">
              Melhores ofertas
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </a>
        </Link>
      </li>
      <li className='group-items'>
        <Link href={'/#about'}>
          <a className='link-primary'>
            <div className="label">
              Lojas oficiais
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </a>
        </Link>
      </li>
      <li className='group-items'>
        <Link href={'/#about'}>
          <a className='link-primary'>
            <div className="label">
              Contato
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  )
}