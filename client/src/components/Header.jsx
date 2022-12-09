import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Logo from '../images/Logo.ico';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  return (
    <header className='header'>
      <div className='logo'>
      {user ?(
        <Link to='/'><img src={Logo} alt='aljanoubia img' width={70} height={70} /></Link>
      ):(
        <Link to='/login'><img src={Logo} alt='aljanoubia img' width={70} height={70} /></Link>
      )}
      </div>
      <ul>
      {user ?(
        <>
          <li>
            <Link to='/bill'>Factures</Link>
          </li>
          <li>
            <Link to='/products'>Stock</Link>
          </li>
          <li>
            <Link to='/employer'>Employeurs</Link>
          </li>
        </>
      ):(<></>)}
      </ul>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Se déconnecter
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Connexion
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Inscription
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header