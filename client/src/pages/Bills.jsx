import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BillForm from '../components/BillForm'
import BillItem from '../components/BillItem'
import Spinner from '../components/Spinner'
import { getBills, reset } from '../features/bills/billSlice'
import { getProducts } from '../features/products/productSlice'

function Bill() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { bills, isLoading, isError, message } = useSelector(
    (state) => state.bills
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
      return
    }

    dispatch(getBills())
    dispatch(getProducts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Gestion des factures</h1>
        <p>tableau de bord des factures</p>
      </section>

      <BillForm />

      <section className='content'>
        {bills.length > 0 ? (
          <div className='bills'>
            {bills.map((bill) => (
              <BillItem key={bill._id} bill={bill} />
            ))}
          </div>
        ) : (
          <h3>Vous n'avez ajouté aucune facture</h3>
        )}
      </section>
    </>
  )
}

export default Bill