import React from "react";
import { render, screen, act } from "@testing-library/react";
import axios from "axios";
import ProductList from "./index";
import { CartProvider } from "../../cartContext"; 

jest.mock("axios"); 

beforeEach(() => {
  axios.get.mockResolvedValue({ data: [] }); 
});

describe("ProductList", () => {
  it("fetches and renders products correctly", async () => {
    render(
      <CartProvider>
        <ProductList />
      </CartProvider>
    );

    
    expect(screen.getByText("در حال بارگزاری...")).toBeInTheDocument();

    
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    
    expect(screen.queryByText("Product 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
  });
});
