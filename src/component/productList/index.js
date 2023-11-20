import React, { useState, useEffect, useRef } from "react";
import axios from "../../api/axios/axios.interceptors";
import { FaCartArrowDown, FaHtml5 } from "react-icons/fa";
import Select from "react-select";
import Pagination from "react-bootstrap/Pagination";
import { useCart } from "../../cartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const itemsPerPage = 9;
  const [activePage, setActivePage] = useState(1);
  const { addToCart: addToCartContext } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    axios
      .get("/products?sort=desc")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    const storedCartItemCount = localStorage.getItem("cartItemCount");
    if (storedCartItemCount) {
      setCartItemCount(parseInt(storedCartItemCount, 10));
    }

    // ...your existing useEffect code for fetching products
  }, []);
  const productListRef = useRef();
  const addToCart = (product) => {
    addToCartContext(product);
    toast.success("محصول به سبد خرید اضافه شد.");
    setCartItemCount(cartItemCount + 1);
  };
  const categoryOptions = [
    { value: "all", label: "همه" },
    { value: "electronics", label: "کالای دیجیتال" },
    { value: "women's clothing", label: "پوشاک بانوان" },
    { value: "men's clothing", label: "پوشاک اقایان" },
    { value: "jewelery", label: "زیورالات" },
  ];

  const filteredProducts = products.filter((product) => {
    const title = product.title.toLowerCase();
    const category = product.category.toLowerCase();

    return (
      (title.includes(searchInput.toLowerCase()) || searchInput === "") &&
      (selectedCategory === "all" || category === selectedCategory)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    // Scroll to the top of the product list
    productListRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={productListRef} className="container mb-5">
      <div className="productlist-header">
        <h1>لیست محصولات</h1>
        <Link to={"/card"} className="cart-auto">
          <div className="d-flex justify-content-center align-items-center">
            {cartItemCount > 0 ? (
              <span className="cart-item-count">{cartItemCount}</span>
            ) : (
              <p className="empty-counter">0</p>
            )}
            <FaCartArrowDown className="productlist-cart" />
          </div>
        </Link>
      </div>
      <div className="d-flex col-sm-12">
        <input
          type="text"
          placeholder="جستجو محصول..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="productlist-search w-25 col-sm-12"
        />
        <Select
          value={categoryOptions.find(
            (option) => option.value === selectedCategory
          )}
          options={categoryOptions}
          onChange={(selectedOption) =>
            setSelectedCategory(selectedOption.value)
          }
          className="w-25 mx-5 col-sm-12"
        />
      </div>
      {isLoading ? (
        <div className="text-center mt-5">در حال بارگزاری...</div>
      ) : (
        <div className="row">
          {displayedProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mt-4 px-3 py-3">
                <div className="card-body">
                  <img
                    src={product.image}
                    className="product-img"
                    alt={product.image}
                  />
                  <h6 className="card-title mt-3  text-center">
                    {product.title}
                  </h6>
                  <p className="card-text">${product.price}</p>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="productlist-btn btn btn-warning w-100"
                    onClick={() => addToCart(product)}
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === activePage}
              onClick={() => handlePageChange(index + 1)}
              className="mx-2 "
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default ProductList;
