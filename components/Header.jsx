import {useState, useEffect} from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { Collapse } from 'reactstrap'
import { useRouter } from 'next/router'
import CategorySubmenu from './CategorySubmenu'

export default function Header (props) {
  const [stateCollapse, setStateCollapse] = useState(true)
  const [onShadow, setOnShadow] = useState(false)
  const [onScroll, setOnScroll] = useState(false)
  const [showCategory, setShowCategory] = useState(false)
  const breakpointDesktop = 1199.95
  const router = useRouter()

  // Methods
  function setShadowInHeader() {
    if (window.innerWidth > breakpointDesktop && window.scrollY > 10 ) {
      setOnShadow(true)
    } else if (window.innerWidth < breakpointDesktop && (window.scrollY > 10 || stateCollapse)) {
      setOnShadow(true)
    } else {
      setOnShadow(false)
    }
  }
  function closeCollapseInMobile() {
    window.innerWidth < breakpointDesktop ? setStateCollapse(false) : null
  }
  function verifyScroll() {
    window.scrollY > 10 ? setOnScroll(true) : setOnScroll(false)
  }
  function setCollapseIfWindowWidth(param) {
    window.innerWidth < param ? setStateCollapse(false) : setStateCollapse(true)
  }


  // UseEffect repeat
  useEffect(() => {
    setShadowInHeader()
    verifyScroll()
    // Resize event
    window.addEventListener('resize', () => {
      setShadowInHeader()
    })
    // Scroll Event
    window.addEventListener('scroll', () => {
      setShadowInHeader()
      verifyScroll()
    })
    if (stateCollapse && window.innerWidth < breakpointDesktop) {
      document.body.classList.add('overflow-hidden')
      document.querySelector('html').classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
      document.querySelector('html').classList.remove('overflow-hidden')
    }
      
  })

  // UseEffect no repeat
  useEffect(() => {
    setCollapseIfWindowWidth(1199.95)
    // Resize event
    window.addEventListener('resize', () => {
      setCollapseIfWindowWidth(1199.95)
    })
  }, [])

  return(
    <>
      <header id='headerComponent' className={classNames({ 'shadow': onShadow, 'fixed-top': true })}>
        <nav className="navbar nav">
          <div className="container">
            <a href="" className='brand-logo'>
              <img src="/img/logo.png" width={200} height={100} style={{width: !onScroll ? '180px' : '160px'}} loading="lazy" alt="Logo" />
            </a>
            <button
              onClick={() => { setStateCollapse(!stateCollapse) }}
              className='btn toggle-nav d-flex d-xl-none p-0'
              title={ stateCollapse ? 'Fechar barra de navegação' : 'Abrir barra de navegação' }
              aria-label={ stateCollapse ? 'Fechar barra de navegação' : 'Abrir barra de navegação' }
            >
              <ion-icon name="search-outline" />
              <ion-icon name={stateCollapse ? 'close-outline' : 'menu-outline'} />
            </button>
            <Collapse isOpen={stateCollapse} className="col-12 px-0 col-xl">
              <div className='content-nav'>
                <div className='mx-xl-auto col-12 col-xl-auto p-0'>
                  <form
                    className='form-search'
                    onSubmit={(e) => {
                      e.preventDefault()
                      router.push({
                        pathname: '/products/search/[name]',
                        query: { name: document.querySelector('#headerComponent #search-header-input').value }
                      })
                      closeCollapseInMobile()
                    }}
                  >
                    <input
                      id='search-header-input'
                      type="text"
                      className='form-control'
                      required
                      placeholder='Busque por algo...'
                      onFocus={() => {document.querySelector('#headerComponent .form-search').classList.add('bg-white')}}
                      onBlur={() => {document.querySelector('#headerComponent .form-search').classList.remove('bg-white')}}
                    />
                    <button type='submit' title='Buscar' aria-label='Buscar'>
                      <ion-icon name="search-outline"></ion-icon>
                    </button>
                  </form>
                  <ul className='group-links'>
                    <li className='group-items'>
                      <div
                        className="hover-categories"
                        onMouseEnter={() => setShowCategory(true)}
                        onMouseLeave={() => setShowCategory(false)}
                      >
                        Categorias
                        <Collapse isOpen={showCategory}>
                          <CategorySubmenu />
                        </Collapse>
                      </div>
                    </li>
                    <li className='group-items'>
                      <Link href={'/#exclusividades'}>
                        <a className='links-primary'>Exclusividades</a>
                      </Link>
                    </li>
                    <li className='group-items'>
                      <Link href={'/#about'}>
                        <a className='links-primary'>Projetos</a>
                      </Link>
                    </li>
                    <li className='group-items'>
                      <Link href={'/#about'}>
                        <a className='links-primary'>Avaliações</a>
                      </Link>
                    </li>
                    <li className='group-items'>
                      <Link href={'/#about'}>
                        <a className='links-primary'>Contato</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <hr className='col-12 mt-3 d-xl-none mb-4' />
                <div className='area-login'>
                  <div className='d-flex align-items-center'>
                    <button title='promoções' aria-label='promoções'>
                      <ion-icon name="trending-up-outline"></ion-icon>
                      em alta
                    </button>
                    <div className="text-white mx-2" style={{ lineHeight: '88%', fontWeight: '200' }}>
                      | <br />
                      |
                    </div>
                    <button title='Perfil no instagram' aria-label='Perfil no instagram'>
                      <ion-icon name="logo-instagram" />
                      insta
                    </button>
                    <div className="text-white mx-2" style={{ lineHeight: '88%', fontWeight: '200' }}>
                      | <br />
                      |
                    </div>
                    <button title='suporte' aria-label='suporte'>
                      <ion-icon name="chatbubbles-outline"></ion-icon>
                      suporte
                    </button>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </nav>
      </header>
    </>
  )
}