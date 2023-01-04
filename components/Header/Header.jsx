import {useState, useEffect} from 'react'
import classNames from 'classnames'
import { Collapse } from 'reactstrap'
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'
import FormSearch from '../parts/FormSearch/FormSearch'
import LinksNavbar from '../parts/LinksNavbar/LinksNavbar'
import AreaLogin from '../parts/AreaLogin/AreaLogin'
import { useDispatch, useSelector } from 'react-redux'
import { backdropFalse } from '../../redux/backDropMask'
import Link from 'next/link'
import urls from '../../helpers/url'
import styles from './Header.module.scss'

export default function Header ({ modelScroll = false, linksCategory }) {
  const [stateCollapse, setStateCollapse] = useState(false)
  const [onScroll, setOnScroll] = useState(false)
  const breakpointDesktop = 1199.95
  const router = useRouter()
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  // Methods
  function setShadowInHeader() {
    window.scrollY > 10 ? setOnScroll(true) : setOnScroll(false)
  }

  function closeCollapseInMobile() {
    window.innerWidth < breakpointDesktop ? setStateCollapse(false) : null
  }

  function submitFormSearch() {
    router.push({
      pathname: '/products/search',
      query: { parameter: document.querySelector('#headerComponent #search-header-input').value }
    })
    closeCollapseInMobile()
  }

  function setCollapseIfWindowWidth(param = breakpointDesktop) {
    window.innerWidth < param ? setStateCollapse(false) : setStateCollapse(true)
  }

  // UseEffect repeat
  useEffect(() => {
    if (stateCollapse && window.innerWidth < breakpointDesktop) {
      setOnScroll(true)
    } else if (!stateCollapse && window.innerWidth < breakpointDesktop && window.scrollY < 10) {
      setOnScroll(false)
    }
  })

  // UseEffect no repeat
  useEffect(() => {
    setCollapseIfWindowWidth()
    setShadowInHeader()
    // Resize event
    let w = window.innerWidth
    window.addEventListener('resize', () => {
      if (w != window.innerWidth) {
        w = window.innerWidth
        setCollapseIfWindowWidth()
        setShadowInHeader()
      }
    })
    window.addEventListener('scroll', () => setShadowInHeader())
  }, [])

  useEffect(() => {
    modelScroll
      ? (document.body.style.paddingTop = '85px')
      : (document.body.style.paddingTop = '0')
  })

  return(
    <>
      <header id='headerComponent' className={`${styles.header_component} ${onScroll && 'shadow'} fixed-top`}>
        <CSSTransition
          in={state.backdrop.setBackdrop}
          timeout={300}
          classNames={{ enter: 'fade-opac-enter', enterActive: 'fade-opac-enter-active', exit: 'fade-opac-exit', exitActive: 'fade-opac-exit-active' }}
          unmountOnExit
        >
          <div className={styles.backdrop_mask} />
        </CSSTransition>
        <nav className={`navbar nav ${ onScroll && styles.on_scroll} ${ modelScroll && styles.on_scroll_static}`}>
          <div className="container">
            <Link href={String(urls.home)}>
              <a className={styles.brand_logo}>
                <img src="/img/logo.webp" width={200} height={100} loading="lazy" alt="Logo" />
              </a>
            </Link>
            <button
              onClick={() => {
                setStateCollapse(!stateCollapse)
                dispatch(backdropFalse())
              }}
              className={`${styles.toggle_nav} btn d-flex d-xl-none p-0`}
              title={ stateCollapse ? 'Fechar barra de navegação' : 'Abrir barra de navegação' }
              aria-label={ stateCollapse ? 'Fechar barra de navegação' : 'Abrir barra de navegação' }
            >
              <ion-icon name="search-outline" />
              <ion-icon name={stateCollapse ? 'close-outline' : 'menu-outline'} />
            </button>
            <Collapse isOpen={stateCollapse} className="col-12 px-0 col-xl">
              <div className={styles.content_nav}>
                <div className='mx-xl-auto col-12 col-xl-auto p-0'>
                  <FormSearch submitEvent={(e) => {e.preventDefault(), submitFormSearch()}} />
                  <LinksNavbar linksCategory={linksCategory} />
                </div>
                <hr className='col-12 mt-3 d-xl-none mb-4' />
                <AreaLogin />
              </div>
            </Collapse>
          </div>
        </nav>
      </header>
    </>
  )
}