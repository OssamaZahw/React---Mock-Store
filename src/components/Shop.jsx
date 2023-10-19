import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Shop = () => {
  const [products, setProds] = useState([]);

  const getProds = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setProds(data);

  };

  useEffect(() => {
    getProds();
  }, []);

  console.log(products);

  const shoppingDisplay = products.map((prod) => (
    <div className="card-box col-3 px-5 my-5">
      <figure className="card__img-box">
        <img src={prod.image} alt="" />
      </figure>

      <h4>{prod.title}</h4>
      <h6>{prod.price}</h6>
      <Link className="btn btn-primary my-2" to={`/product/${prod.id}`}>See Details</Link>
    </div>
  ));

  return (
    <>
      <div className="items-cont container mx-auto row">{shoppingDisplay}</div>
    </>
  );
};

export default Shop;
