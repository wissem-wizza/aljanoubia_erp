import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getBills, reset } from '../features/bills/billSlice'
import aljanoubia from '../images/header.png';

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, message } = useSelector(
    (state) => state.bills
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
      // return
    }
    
    if (!user) {
      navigate('/login')
      // return
    }

    // dispatch(getBills())

    return () => {
      dispatch(reset())
    }
  },[user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className='heading'>
        {/* <h1>Bienvenue {user && user.name}</h1> */}
        <p>AL JANOUBIA TV</p>
        <img src={aljanoubia} alt='aljanoubia img' width={800} height={300} />
      </section>
    </>
  )
}

export default Home