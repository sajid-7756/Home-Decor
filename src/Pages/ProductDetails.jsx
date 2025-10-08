import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { DotLoader } from "react-spinners";
import { setWishlist } from "../Utilities/localStorage";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();

  const product = products.find((product) => product.id === parseInt(id));

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <DotLoader />
      </div>
    ); // error prob fix
  const { name, description, category, image, price, stock } = product || {};

  // const handleAddToWishList = () => {
  //   const existingWishList = JSON.parse(localStorage.getItem("wishlist"));

  //   let updatedList = [];
  //   if (existingWishList) {
  //     const isDuplicate = existingWishList.some(
  //       (element) => element.id === product.id
  //     );
  //     if (isDuplicate) return alert("No isDuplicates");

  //     updatedList = [...existingWishList, product];
  //   } else {
  //     updatedList.push(product);
  //   }
  //   console.log(updatedList);

  //   localStorage.setItem("wishlist", JSON.stringify(updatedList));
  // };

  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img className="h-64 lg:h-100 rounded" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="bg-blue-400 w-2/13 text-center rounded-2xl">
            {category}
          </p>
          <p>{description}</p>
          <p>
            Stock:{" "}
            <span className={`text-green-500 ${!stock && "text-red-500"}`}>
              {stock ? "Available" : "Not Available"}
            </span>
          </p>
          <p>
            Price: <span className="font-semibold">{price} ৳</span>
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => setWishlist(product)}
              className="btn btn-primary"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
