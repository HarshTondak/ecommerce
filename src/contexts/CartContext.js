import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // Whenever there is a change in the cart
  useEffect(() => {
    if (cart) {
      // Updating the cart quantity
      const amount = cart.reduce((accumulator, currentProd) => {
        return accumulator + currentProd.amount;
      }, 0);
      setItemAmount(amount);

      // Updating the total amount
      const total = cart.reduce((accumulator, currentProd) => {
        return accumulator + currentProd.price * currentProd.amount * 100;
      }, 0);

      setTotal(total);
    }
  }, [cart]);

  // To add products in cart
  const addToCart = (product) => {
    const { id } = product;

    // To check if the product is already in cart or not
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // If product is already in cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // If product is new
      const newItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }
  };

  // To remove products from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  // Increase Quantity
  const increaseQty = (id) => {
    const product = cart.find((prod) => prod.id === id);
    addToCart(product);
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    const product = cart.find((prod) => prod.id === id);
    if (product.amount >= 2) {
      const newCart = cart.map((prod) => {
        if (prod.id === id) {
          return { ...prod, amount: product.amount - 1 };
        } else {
          return prod;
        }
      });

      setCart(newCart);
    } else {
      removeFromCart(id);
    }
  };

  // To empty the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
