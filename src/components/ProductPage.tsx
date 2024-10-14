import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((r) => {
          setProduct(r.data);
        })
        .catch((e) => {
          console.error("error fetching data:", e);
        });
    }
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p=5 w=[60%]">
      <button
        className="ml-5 hover:bg-gray-200 hover:text-black mt-5 mb-8 px-4 py-2 bg-black text-white rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[50%] h-auto mb-5"
      />

      <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
      <p className="mb-4 text-gray-700 w-[70%]">{product.description}</p>

      <div className="flex">
        <p>Price: ${product.price}</p>
        <p className="ml-10">Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;
