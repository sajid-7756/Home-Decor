import { useState } from "react";
import WishlistCard from "../Components/WishlistCard";
import { getWishlist } from "../Utilities/localStorage";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(() => getWishlist());
  const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-around gap-15 md:gap-0">
        <h3 className="text-2xl font-semibold">
          Wish List{" "}
          <span className="text-xs text-gray-400">
            ({wishlist.length}) Products Found
          </span>
        </h3>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          defaultValue="Pick a color"
          className="select w-35 md:w-60"
        >
          <option value={"none"}>Sort by price</option>
          <option value={"price-asc"}>low &gt; high</option>
          <option value={"price-desc"}>high &gt; low</option>
        </select>
      </div>
      <div className=" flex flex-col justify-center items-center space-y-5">
        {wishlist
          ? sortedItem.map((list) => (
              <WishlistCard
                key={list.id}
                list={list}
                setWishlist={setWishlist}
              ></WishlistCard>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Wishlist;
