import { useState } from "react";
import { useParams } from "react-router-dom"
import { useEffect } from "react";

function ProductDetails() {
   let params = useParams();
   let id = params.id
   console.log(id);

   const [details, setDetails] = useState({})
  

  
   const getData = async() => {
    const res = await fetch (`https://fakestoreapi.com/products/${id}`)
    const data = await res.json();
    console.log(data);
    setDetails(data);
  }

  useEffect(() => {
    getData()
  
  }, [])
  
  console.log (details)

  return (
    <>
    <div className="container mx-auto row py-5">
      <div className="col-6 p-5">
        <figure>
          <img src={details.image} alt="" />
        </figure>
      </div>

      <div className="col-6">
        <p>{details.category}</p>
        <h2>{details.title}</h2>

        <p>{details.description}</p>

        <h3>${details.price}</h3>


      </div>
    </div>

    </>
    
  )
}

export default ProductDetails