export default {
  addToCart(context, payload) {
    let oldProduct = null;
    for (const item of context.state.cartList) {
      if (payload.iid === item.iid) {
        oldProduct = item
      }
    }
    // 也可以使用数据的find方法, 该方法接收一个回调函数, 回调函数返回true时, 将对应的item返回
    if (oldProduct) {
      context.commit('addCounter', oldProduct)
    } else {
      payload.count = 1;
      context.commit('addProduct', payload)
    }
  }
}