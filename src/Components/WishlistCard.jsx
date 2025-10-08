const WishlistCard = ({ list, setWishlist }) => {
  const { image, name, price, category } = list;

  const handleRemove = (currList) => {
    const existingWishList = JSON.parse(localStorage.getItem("wishlist"));

    let updatedList = existingWishList.filter(
      (element) => element.id !== currList.id
    );

    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    setWishlist(updatedList);
  };

  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md ">
        <li className="list-row w-90 md:w-100 lg:w-150">
          <div>
            <img className="size-10 rounded-box" src={image} />
          </div>
          <div>
            <div>{name}</div>
            <div className="text-xs uppercase font-semibold opacity-60 flex gap-2">
              <p>Category: {category}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-3">
            <p>Price: $ {price}</p>
            <button
              onClick={() => handleRemove(list)}
              className="btn btn-square btn-ghost bg-red-300"
            >
              X
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WishlistCard;
