import { useEffect, useState } from "react";
import WishlistCard from "../Components/WishlistCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    setWishlist(savedList);
  }, []);

  return (
    <div className="flex items-center flex-col space-y-5">
      <h3 className="text-2xl font-semibold">Wish List ({wishlist.length})</h3>
      <div className="space-y-5">
        {wishlist
          ? wishlist.map((list) => (
              <WishlistCard key={list.id} list={list} wishlist={wishlist} setWishlist={setWishlist}></WishlistCard>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Wishlist;
