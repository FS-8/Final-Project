import axios from "axios";
// aksi fetch
export function fetching() {
  return {
    type: "FETCH",
  };
}
// aksi sukses
export function succes(data) {
  return {
    type: "SUKSES",
    payload: data,
  };
}
// aksi filter done
export function filterDone() {
  return {
    type: "DONE",
  };
}
//  aksi filte active
export function filterActive() {
  return {
    type: "AKTIF",
  };
}
// aksi ubah status menjadi all
export function filterALl() {
  return {
    type: "ALL",
  };
}
// aksi mendapat data dari API
export function getSepatu() {
  return async function (dispatch) {
    dispatch(fetching());

    const { products } = await axios("http://localhost:3000/products");

    dispatch(succes(products));
  };
}
