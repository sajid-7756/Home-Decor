import { Link } from "react-router";
import FurnitureCard from "../Components/FurnitureCard";
import useProducts from "../Hooks/useProducts";
import SkeletonLoader from "../Components/SkeletonLoader";

const Home = () => {
  const { products, loading } = useProducts();
  const feturedProducts = products.slice(0, 6);

  return (
    <>
      <div className="text-center py-5 space-y-2">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
        <Link to={"/products"} className="text-blue-400">
          See All Products
        </Link>
      </div>
      {loading ? (
        <SkeletonLoader></SkeletonLoader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {feturedProducts.map((data) => (
            <FurnitureCard key={data.id} data={data}></FurnitureCard>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
