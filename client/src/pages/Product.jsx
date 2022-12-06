import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ProductForm from '../components/ProductForm'
import ProductItem from '../components/ProductItem'
import Spinner from '../components/Spinner'
import { getProducts, reset } from '../features/products/productSlice'

function Product() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
      return
    }

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
        <h1>Welcome {user && user.name}</h1>
        <p>Products Product</p>
      </section>

      <ProductForm />

      <section className='content'>
        {products.length > 0 ? (
          <div className='products'>
            {products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <h3>You have not set any products</h3>
        )}
      </section>
    </>
  )
}

export default Product