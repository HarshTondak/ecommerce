import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle dropdown change
  const handleDropdownChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products by selected category
  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All Categories" ||
        product.category === selectedCategory) &&
      (searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  // Extract unique categories for dropdown options
  const uniqueCategories = [
    "All Categories",
    ...Array.from(new Set(products.map((product) => product.category))),
  ].sort();

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          {/* Filter Choices */}
          <div className="mb-10 flex justify-between items-center flex-col md:flex-row gap-5">
            <div>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleDropdownChange}
                className="px-3 py-1 uppercase bg-black text-white font-semibold w-[300px] md:w-60"
              >
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search products here..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="px-3 py-1 border-b border-gray-400 w-[300px] lg:w-[400px]"
            />
          </div>

          {/* Products */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
                        max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
