const url = "./src/assets/images/dishes/";

export default function FoodCard({
    image,
    title,
    description,
    off,
    price,
    discount,
    onAdd
}) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:scale-105 transition overflow-hidden">
            {/* Image */}
            <div className="relative">
                <img
                    src={`${url}${image}`}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#fa7d08] text-white text-xs px-3 py-1 rounded-full">
                    {off}% OFF
                </span>
            </div>

            {/* Content */}
            <div className="p-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500 mb-3">{description}</p>

                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-pink-600 font-semibold mr-2">
                            {discount}
                        </span>
                        <span className="text-gray-400 line-through text-sm">
                            {price}
                        </span>
                    </div>

                    <button
                        onClick={onAdd}
                        className="px-4 py-1.5 text-sm rounded-full bg-pink-600 text-white hover:bg-amber-600"
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
}
