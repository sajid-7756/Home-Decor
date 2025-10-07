const WishlistCard = ({ list, wishlist, setWishlist }) => {
  const { image, name, price } = list;

  const handleRemove = (currList) => {
    const filtredList = wishlist.filter(
      (element) => element.id !== currList.id
    );
    setWishlist(filtredList);
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
            <div className="text-xs uppercase font-semibold opacity-60">
              Price: $ {price}
            </div>
          </div>
          <button
            onClick={() => handleRemove(list)}
            className="btn btn-square btn-ghost"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WishlistCard;
