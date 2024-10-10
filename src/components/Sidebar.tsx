import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponnse {
  products: Product[];
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();

  const [category, setCategory] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirts",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://dummyjson.com/products");
        const data: FetchResponnse = await response.json();

        const uniqueCategories = Array.from(
          new Set(data.products.map((p) => p.category))
        );

        setCategory(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setMaxPrice(val ? parseFloat(val) : undefined);
  };

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">EliteBuy🛒</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>
        <section>
          {category.map((c, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={c}
                className="mr-2 w-[16px] h-[16px]"
              />
              {c.toUpperCase()}
            </label>
          ))}
        </section>

        {/* keyWords */}

        <div className="mt-4 mb-5">
          <h2 className="text-xl font-semibold mb-3">Hot Search🔥</h2>
          <div>
            {keywords.map((k, index) => (
              <button
                key={index}
                className="border rounded text-left w-full block mb-2 px-4 py-2  hover:bg-gray-200"
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button className="bg-black text-white rounded px-4 py-2 w-full block mb-2 mt-4 hover:bg-gray-700">
          Reset Filter
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
