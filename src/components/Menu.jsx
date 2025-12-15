
import { useState } from "react";
import foodItems from "../services/foodItems.json";
import FoodCard from "../components/MenuCard";
import Pagination from "../components/Pagination";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 4;

  // Filter
  const filteredItems =
    filter === "All"
      ? foodItems
      : foodItems.filter(item => item.type === filter);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-pink-200 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="uppercase tracking-widest text-4xl md:text-5xl font-bold">
            Menu
          </h1>
          <p className="text-gray-600 uppercase tracking-widest text-xs md:text-sm mt-2">
            Delicious Moments Start Here
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center md:justify-start gap-4 mb-8 flex-wrap">
          {["All", "Vege", "Non-Vege"].map(type => (
            <button
              key={type}
              onClick={() => {
                setFilter(type);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm transition
                ${filter === type
                  ? "bg-white text-pink-600 font-semibold border"
                  : "bg-pink-600 text-white"}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {currentItems.map(item => (
            <FoodCard
              key={item.id}
              {...item}
              onAdd={() => console.log("Added:", item.title)}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          totalItems={filteredItems.length}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
