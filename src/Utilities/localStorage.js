const getWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const setWishlist = (product) => {
  const wishlist = getWishlist();

  try {
    const isDuplicate = wishlist.some((item) => item.id === product.id);
    if (isDuplicate) return alert("Already added");
    const updatedWishlist = [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  } catch (error) {
    console.log(error);
  }
};

const removeWishlist = (product) => {
  const wishlist = getWishlist();
  try {
    const updatedList = wishlist.filter((list) => list.id !== product.id);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  } catch (error) {
    console.log(error);
  }
};

export { getWishlist, setWishlist, removeWishlist };
