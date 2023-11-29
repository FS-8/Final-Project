import axios from "axios";

export const addToCartSuccess = (cartItem) => ({
  type: "ADD_TO_CART_SUCCESS",
  payload: cartItem,
});

export const getListCartSuccess = (cartItems) => {
  return {
    type: "GET_LIST_CART_SUCCESS",
    payload: Array.isArray(cartItems) ? cartItems : [],
  };
};

// Menangani kesalahan ketika data bukan array
export const handleNonArrayDataError = () => {
  return {
    type: "HANDLE_NON_ARRAY_DATA_ERROR",
  };
};

// Menangani kesalahan umum saat mengambil data
export const handleFetchDataError = () => {
  return {
    type: "HANDLE_FETCH_DATA_ERROR",
  };
};

export const getListCart = () => {
  return (dispatch) => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      if (Array.isArray(cartItems)) {
        dispatch(getListCartSuccess(cartItems));
        console.log("Successfully fetched cart items:", cartItems);
      } else {
        console.error("Data retrieved from localStorage is not an array");
        dispatch(handleNonArrayDataError());
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      dispatch(handleFetchDataError());
    }
  };
};

// Aksi untuk menambahkan atau mengupdate produk dalam keranjang
export const addToProductCart = (newCartItem) => {
  return (dispatch) => {
    try {
      // Ambil daftar item dari localStorage
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      // Cek apakah produk sudah ada dalam keranjang berdasarkan product, color, dan size
      const existingItemIndex = cartItems.findIndex(
        (item) =>
          item &&
          item.product === newCartItem.product &&
          item.selectedColor === newCartItem.selectedColor &&
          item.selectedSize === newCartItem.selectedSize
      );

      if (existingItemIndex !== -1) {
        // Jika produk sudah ada dengan warna dan ukuran yang sama, tambahkan kuantitas
        cartItems[existingItemIndex].quantity += newCartItem.quantity;
        // Perbarui harga sesuai dengan quantity
        cartItems[existingItemIndex].price =
          cartItems[existingItemIndex].quantity *
          cartItems[existingItemIndex].basePrice;
      } else {
        // Jika produk belum ada atau berbeda warna/ukuran, tambahkan produk baru
        const updatedCartItem = {
          ...newCartItem,
          price: newCartItem.quantity * newCartItem.basePrice,
        };
        cartItems.push(updatedCartItem);
      }

      // Simpan kembali ke localStorage
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Dispatch aksi untuk menampilkan daftar item di komponen Cart
      dispatch(getListCartSuccess(cartItems));
      console.log("Successfully added/updated cart items:", cartItems);
    } catch (error) {
      console.error("Error adding/updating cart items:", error);
      dispatch(handleFetchDataError());
    }
  };
};

// Aksi untuk menghapus produk dari keranjang
export const removeProductFromCart = (
  productId,
  selectedColor,
  selectedSize
) => {
  return (dispatch) => {
    try {
      // Ambil daftar item dari localStorage
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      // Filter item yang akan dihapus dari keranjang berdasarkan product, color, dan size
      cartItems = cartItems.filter(
        (item) =>
          (item && item.product !== productId) ||
          item.selectedColor !== selectedColor ||
          item.selectedSize !== selectedSize
      );

      // Simpan kembali ke localStorage
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Dispatch aksi untuk menampilkan daftar item di komponen Cart
      dispatch(getListCartSuccess(cartItems));
      console.log("Successfully removed item from cart:", cartItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      dispatch(handleFetchDataError());
    }
  };
};

// actions.js

// Aksi untuk menambah jumlah barang
export const incrementQuantity = (productId, selectedColor, selectedSize) => {
  return (dispatch) => {
    try {
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItemIndex = cartItems.findIndex(
        (item) =>
          item &&
          item.product === productId &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1;
        cartItems[existingItemIndex].price =
          cartItems[existingItemIndex].quantity *
          cartItems[existingItemIndex].basePrice;
      }

      localStorage.setItem("cart", JSON.stringify(cartItems));

      dispatch(getListCartSuccess(cartItems));
      dispatch(calculateTotalPrice());
    } catch (error) {
      console.error("Error incrementing quantity:", error);
      dispatch(handleFetchDataError());
    }
  };
};

// Aksi untuk mengurangi jumlah barang
export const decrementQuantity = (productId, selectedColor, selectedSize) => {
  return (dispatch) => {
    try {
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItemIndex = cartItems.findIndex(
        (item) =>
          item &&
          item.product === productId &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existingItemIndex !== -1) {
        if (cartItems[existingItemIndex].quantity > 1) {
          cartItems[existingItemIndex].quantity -= 1;
          cartItems[existingItemIndex].price =
            cartItems[existingItemIndex].quantity *
            cartItems[existingItemIndex].basePrice;
        }
      }

      localStorage.setItem("cart", JSON.stringify(cartItems));

      dispatch(getListCartSuccess(cartItems));
      dispatch(calculateTotalPrice());
    } catch (error) {
      console.error("Error decrementing quantity:", error);
      dispatch(handleFetchDataError());
    }
  };
};
