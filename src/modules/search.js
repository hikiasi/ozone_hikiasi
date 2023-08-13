import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");
  const minPriceInput = document.getElementById("min");
  const maxPriceInput = document.getElementById("max");
  const discountCheckbox = document.getElementById("discount-checkbox");

  searchInput.addEventListener("input", (event) => {
    const value = event.target.value;

    getData().then((data) => {
      const filterParams = {
        minPrice: parseInt(minPriceInput.value) || 0,
        maxPrice: parseInt(maxPriceInput.value) || Infinity,
        showSaleOnly: discountCheckbox.checked,
      };
      renderGoods(searchFilter(data, value, filterParams));
    });
  });

  minPriceInput.addEventListener("input", () => {
    searchInput.dispatchEvent(new Event("input"));
  });

  maxPriceInput.addEventListener("input", () => {
    searchInput.dispatchEvent(new Event("input"));
  });

  discountCheckbox.addEventListener("change", () => {
    searchInput.dispatchEvent(new Event("input"));
  });
};

export default search();
