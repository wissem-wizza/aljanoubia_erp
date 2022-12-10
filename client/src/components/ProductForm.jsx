import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createProduct,
  updateProduct,
} from "../features/products/productSlice";

function ProductForm({ inputs, modify, Product_id }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setName(inputs[0]);
    setType(inputs[1]);
    setPrice(inputs[2]);
    setQuantity(inputs[3]);
  }, [inputs]);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (modify) {
      console.log("IDDDDD", Product_id);
      dispatch(updateProduct({ name, type, quantity, price, Product_id }));
    } else dispatch(createProduct({ name, type, quantity, price }));
    setName("");
    setType("");
    setQuantity("");
    setPrice("");
    // console.log("added")
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Produit</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Durée(s)</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Prix unitaire</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            {modify ? "Modifier" : "Ajouter"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;
