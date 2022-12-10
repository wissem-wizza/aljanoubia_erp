import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductForm from "../components/ProductForm";
// import ProductItem from '../components/ProductItem'
import Spinner from "../components/Spinner";
import ProductTable from "../components/ProductTable";
import { getProducts, reset } from "../features/products/productSlice";
import { useState } from "react";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [modify, setModify] = useState(false);
  const [product_id, setProduct_id] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
      return;
    }

    dispatch(getProducts());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Gestion des Produits</h1>
        <p>Liste des produits disponibles en stock</p>
      </section>

      <ProductTable
        setInputs={setInputs}
        setModify={setModify}
        setProduct_id={setProduct_id}
      />
      <br />
      <ProductForm inputs={inputs} modify={modify} product_id={product_id} />
      <br />
    </>
  );
}

export default Product;
