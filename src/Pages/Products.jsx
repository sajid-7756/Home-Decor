import useProducts from "../Hooks/useProducts";
import FurnitureCard from "../Components/FurnitureCard";
import { useState } from "react";
import SkeletonLoader from "../Components/SkeletonLoader";

const Products = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  
  const searchedProducts = term
  ? products.filter((product) => product.name.toLowerCase().includes(term))
  : products;
  
  return (
    <>
      <div className="text-center py-5 space-y-2">
        <h1 className="text-3xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-400">
            ({searchedProducts.length}) Products Found
          </span>
        </h1>
        <label className="input">
          <input
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>
      {loading ? (
        <SkeletonLoader count={16}></SkeletonLoader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {searchedProducts.map((data) => (
            <FurnitureCard key={data.id} data={data}></FurnitureCard>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
