import Link from 'next/link'
import LayoutDefault from '../layouts/LayoutDefault'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { isAuthTrue } from '../redux/authLogin'

export default function Login() {
  const router = useRouter()
  const dispath = useDispatch()

  function submitLogin (e) {
    e.preventDefault()
    if (
        document.querySelector('#login #login-user').value === process.env.NEXT_PUBLIC_USER &&
        document.querySelector('#login #login-password').value === process.env.NEXT_PUBLIC_PASSWORD
      )
    {
      dispath(isAuthTrue())
      router.push('/admin')
    } else {
      alert('Usuário ou senha inválidos')
    }
  }

  return (
    <LayoutDefault noHeader={true}>
      <section id="login">
        <form action="" onSubmit={submitLogin} className='bg-light border shadow'>
          <input type="text" id='login-user' className='form-control' required placeholder="Usuário:" />
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
};