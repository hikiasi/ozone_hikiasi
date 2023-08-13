export const searchFilter = (goods, value, filterParams) => {
  const { minPrice, maxPrice, showSaleOnly } = filterParams;

  return goods.filter((goodsItem) => {
    const titleMatch = goodsItem.title
      .toLowerCase()
      .includes(value.toLowerCase());
    const priceMatch =
      goodsItem.price >= minPrice && goodsItem.price <= maxPrice;
    const saleMatch = showSaleOnly ? goodsItem.sale : true;

    return titleMatch && priceMatch && saleMatch;
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category.toLowerCase().includes(value.toLowerCase());
  });
};
