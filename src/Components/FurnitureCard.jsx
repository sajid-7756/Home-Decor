import { Link } from "react-router";

const FurnitureCard = ({ data }) => {
  const { id, name, price, image, category } = data;
  return (
    <div>
      <div className="card bg-base-100 border border-gray-500 shadow-sm hover:scale-105 transition-all duration-500 p-5">
        <figure className="h-72 overflow-hidden rounded-md">
          <img className="w-full object-cover" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/products/${id}`} className="btn btn-outline">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
