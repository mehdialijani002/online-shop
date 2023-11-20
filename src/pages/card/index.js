import React, { useState, useEffect } from "react";
import { useCart } from "../../cartContext";
import Navbar from "../../component/Navbar/index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import EmptyCard from "../../asset/images/cart-empty.gif";
const Cart = () => {
  const {
    cartItems: contextCartItems,
    addToCart,
    removeItem,
    clearCart,
    updateQuantity,
  } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isClearAllModalOpen, setIsClearAllModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }

    const storedCartItemCount = JSON.parse(
      localStorage.getItem("cartItemCount")
    );
    if (storedCartItemCount !== null) {
      setCartItemCount(storedCartItemCount);
    }

    // ...other useEffect code
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(contextCartItems));
    localStorage.setItem("cartItemCount", JSON.stringify(cartItems.length));
    setCartItems(contextCartItems);
    setCartItemCount(contextCartItems.length);
  }, [contextCartItems]);
  const increaseQuantity = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    updateQuantity(item.id, updatedItem.quantity);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      updateQuantity(item.id, updatedItem.quantity);
    }
  };

  const openModal = (itemId) => {
    setItemToDelete(itemId);
    setIsModalOpen(true);
  };

  const openClearAllModal = () => {
    setIsClearAllModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const closeClearAllModal = () => {
    setIsClearAllModalOpen(false);
  };

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }

    const storedOrderConfirmed = JSON.parse(
      localStorage.getItem("orderConfirmed")
    );
    if (storedOrderConfirmed !== null) {
      setOrderConfirmed(storedOrderConfirmed);
    }
  }, []);
  const confirm = () => {
    navigate("/confirm");
    setOrderConfirmed(true);
  };

  const deleteItem = () => {
    if (itemToDelete !== null) {
      removeItem(itemToDelete);
      setItemToDelete(null);
    } else {
      clearCart();
    }
    closeModal();
  };

  const clearAllItems = () => {
    clearCart();
    closeClearAllModal();
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(contextCartItems));
    localStorage.setItem("orderConfirmed", JSON.stringify(orderConfirmed));
    setCartItems(contextCartItems);
  }, [contextCartItems, orderConfirmed]);

  return (
    <div className="container-fluid mb-5">
      <Navbar />
      <div className="table table-responsive mt-5">
        {cartItems.length > 0 ? (
          <div className="table-responsive table-container ">
            <h1 className="table-header text-center mb-5">سبد خرید</h1>
            <table className="table table-hover table-contain">
              <thead>
                <tr>
                  <th></th>
                  <th>محصول</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        className="table-img"
                        src={item.image}
                        alt={item.title}
                      />
                    </td>
                    <td className="table-title">{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary mt-2   table-number-btn "
                        onClick={() => decreaseQuantity(item)}
                      >
                        --
                      </button>{" "}
                      {item.quantity}{" "}
                      <button
                        className="btn btn-outline-primary mt-2 table-number-btn"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <div className="mt-3">
                        <button
                          className="btn btn-outline-danger py-2 px-3 "
                          onClick={() => openModal(item.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <p className="mx-3">مجموع قیمت: ${total}</p>
              <Button
                variant="primary"
                className="bg-outline-warning mb-4 mx-3"
                onClick={openClearAllModal}
              >
                پاکسازی همه موارد
              </Button>
            </div>
            <Button
              onClick={openConfirmModal}
              className="mt-3 w-100 btn btn-success"
              disabled={orderConfirmed}
            >
              {orderConfirmed ? "سفارش نهایی شد" : "ثبت نهایی سفارش"}
            </Button>
          </div>
        ) : (
          <div className="empty-table">
            <img className="w-25 " src={EmptyCard} />
            <p className="text-center empty-card-text">سبد خرید خالی است.</p>
            <Link className="btn btn-info " to={"/"}>
              لیست محصولات
            </Link>
          </div>
        )}

        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            آیا مطمئن هستید که می‌خواهید این مورد را حذف کنید؟
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              انصراف
            </Button>
            <Button variant="danger" onClick={deleteItem}>
              حذف
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={isConfirmModalOpen && !orderConfirmed}
          onHide={closeConfirmModal}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>سفارش خود را ثبت نهایی می‌کنید؟</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={confirm}>
              ثبت نهایی
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={isClearAllModalOpen} onHide={closeClearAllModal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            آیا مطمئن هستید که می‌خواهید تمام موارد را حذف کنید؟
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeClearAllModal}>
              انصراف
            </Button>
            <Button variant="danger" onClick={clearAllItems}>
              حذف
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
