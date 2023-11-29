import { handleFetchDataError } from "./cartAction";

export const setTotalPrice = (totalPrice) => ({
  type: "SET_TOTAL_PRICE",
  payload: totalPrice,
});

// Aksi untuk mengkalkulasi total harga di keranjang
export const calculateTotalPrice = () => {
  return (dispatch) => {
    try {
      // Ambil daftar item dari localStorage
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      // Hitung total harga
      const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
      );

      // Dispatch aksi untuk menyimpan total harga di Redux store
      dispatch(setTotalPrice(totalPrice));
    } catch (error) {
      console.error("Error calculating total price:", error);
      dispatch(handleFetchDataError());
    }
  };
};
