const ProductCard = ({ title, image, price }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">

      <img
        src={image}
        alt={title}
        className="h-40 w-full object-contain"
      />

      <h2 className="font-bold mt-4">
        {title}
      </h2>

      <p className="text-green-600 font-bold">
        ₹ {price}
      </p>

<button className="bg-black text-white px-4 py-2 rounded mt-3">
    view
</button>
    </div>
  );
};

export default ProductCard;