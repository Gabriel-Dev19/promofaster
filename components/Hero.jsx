import Link from 'next/link'

export default function Hero(props) {
  return(
    <section id="hero">
      <div className="container">
        <div className="box-text">
          <h1>
            <span className='text-orange'>Pare de procurar!</span> <br />
            A promo faster <br />
            faz isso por você.
          </h1>
          <div className='mt-4 pt-4 row mx-0'>
            <Link href="">
              <a className='btn btn-lg btn-yellow' style={{marginRight: '20px'}}>
                Melhores ofertas
              </a>
            </Link>
            <Link href="">
              <a className='btn btn-lg btn-outline-yellow'>
                Procure por algo
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}