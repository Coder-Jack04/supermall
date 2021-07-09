export default {
  addCounter(state, payload) {
    payload.count ++ 
  },
  addProduct(state, payload) {
    payload.checked = true;
    state.cartList.push(payload)
  }
}