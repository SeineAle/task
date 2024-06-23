const Card = ({ id, items }) => {
    return (  
    <div className="card border border-gray-300 shadow-md rounded-md p-4 bg-gray-100 my-4 mx-4">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-800">{items.first.item} - {items.first.price} INR</p>
          </div>
          <div className="flex-1 ml-4">
            <p className="text-lg font-semibold text-gray-800">{items.second.item} - {items.second.price} INR</p>
          </div>
        </div>
        <hr className="my-2 border-gray-400"></hr>
        <button className="block bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md mt-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-600">
          Buy Now
        </button>
      </div>
    );
  };
  
  export default Card;
  
