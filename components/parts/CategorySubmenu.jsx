import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Collapse } from 'reactstrap'
import classNames from 'classnames'

export default function CategorySubmenu () {
  const [stateCollapse, setStateCollapse] = useState(false)

  return(
    <ul className='shadow box-categories'>
      <li>
        <Link href={'/admin'}>
          <a className='item'>
            Moda
          </a>
        </Link>
      </li>
      <li>
        <button className={classNames({ 'item': true, 'active': stateCollapse })} onClick={() => setStateCollapse(!stateCollapse)}>
          Eletrônicos
          <ion-icon name={`chevron-${stateCollapse ? 'up' : 'down'}-outline`}></ion-icon>
        </button>
        <Collapse isOpen={stateCollapse}>
          <div className="ps-3 pb-3">
            <Link href={'/admin'}>
              <a className='subitem'>
                Celulares
              </a>
            </Link>
            <Link href={'/admin'}>
              <a className='subitem'>
                Notebooks
              </a>
            </Link>
          </div>
        </Collapse>
      </li>
      <li>
        <Link href={'/admin'}>
          <a className='item'>
            Móveis
          </a>
        </Link>
      </li>
      <li>
        <Link href={'/admin'}>
          <a className='item'>
            Eletrônicos
          </a>
        </Link>
      </li>
    </ul>
  )
}