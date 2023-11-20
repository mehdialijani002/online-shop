import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./index";

jest.mock("../../cartContext", () => ({
  useCart: () => ({
    cartItems: [],
    addToCart: jest.fn(),
    removeItem: jest.fn(),
    clearCart: jest.fn(),
    updateQuantity: jest.fn(),
  }),
}));

describe("Cart Component", () => {
  test("renders empty cart message when there are no items", () => {
    render(<Cart />);
    const emptyCartMessage = screen.getByText("سبد خرید خالی است.");
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test("renders cart items and total when there are items", () => {
    jest.mock("../../cartContext", () => ({
      useCart: () => ({
        addToCart: jest.fn(),
        removeItem: jest.fn(),
        clearCart: jest.fn(),
        updateQuantity: jest.fn(),
      }),
    }));

    render(<Cart />);

    const product1Title = screen.getByText("Product 1");
    const product2Title = screen.getByText("Product 2");
    expect(product1Title).toBeInTheDocument();
    expect(product2Title).toBeInTheDocument();
  });
});
