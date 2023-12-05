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
export function sukses(data) {
  return {
    type: "SUK",
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

    const { data } = await axios.get("https://shy-ruby-frog-wig.cyclic.app/products");

    dispatch(succes(data.products));
    console.log(data.products);
  };
}

export function getUser(userId) {
  return async function (dispatch) {
    dispatch(fetching());

    const data = await axios.get(`https://shy-ruby-frog-wig.cyclic.app/users/${userId}`);

    dispatch(sukses(data.data.user));
  };
}
