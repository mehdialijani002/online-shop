import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./cartContext", () => ({
  CartProvider: ({ children }) => (
    <div data-testid="cart-provider">{children}</div>
  ),
}));

describe("App", () => {
  it("renders the App component with Routes", () => {
    render(<App />);

    const cartProvider = screen.getByTestId("cart-provider");
    expect(cartProvider).toBeInTheDocument();
  });
});
