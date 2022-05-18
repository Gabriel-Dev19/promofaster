import Link from 'next/link'
import LayoutDefault from '../layouts/LayoutDefault';
import { useRouter } from 'next/router'

function Login(props) {
  const router = useRouter()

  function submitLogin (e) {
    e.preventDefault()
    if (document.querySelector('#login #login-email').value === 'admin@promofaster.com' &&
        document.querySelector('#login #login-password').value === '33779032') {
      alert('Usuário autenticado')
      localStorage.setItem('acesso', true)
      router.push('/admin')
    } else {
      alert('Email ou senha inválidos')
    }
  }

  return (
    <LayoutDefault noHeader={true}>
      <section id="login">
        <form action="" onSubmit={submitLogin} className='bg-light border shadow'>
          <input type="email" id='login-email' className='form-control' required placeholder="Email:" />
          <input type="password" id='login-password' className='form-control mt-3' required placeholder="Senha" />
          <button type="submit" className="btn btn-success col-12 mt-4">
            Entrar
          </button>
          <Link href={'/'}>
            <a className="btn btn-warning d-block mt-2">
              Voltar para o início
            </a>
          </Link>
        </form>
      </section>
    </LayoutDefault>
  )
}

export default Login;