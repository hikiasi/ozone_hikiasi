import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";
import { debounce } from "./helpers";

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");
  const minPriceInput = document.getElementById("min");
  const maxPriceInput = document.getElementById("max");
  const discountCheckbox = document.getElementById("discount-checkbox");
  const checkMark = document.querySelector('.filter-check_checkmark')

  const debounceSearch = debounce((event) => {
    getData().then((data) => {
      const filterParams = {
        minPrice: parseInt(minPriceInput.value) || 0,
        maxPrice: parseInt(maxPriceInput.value) || Infinity,
        showSaleOnly: discountCheckbox.checked,
      };
      renderGoods(searchFilter(data, event.target.value, filterParams));
    });
  }, 500);

  searchInput.addEventListener("input", debounceSearch);

  minPriceInput.addEventListener("input", () => {
    searchInput.dispatchEvent(new Event("input"));
  });

  maxPriceInput.addEventListener("input", () => {
    searchInput.dispatchEvent(new Event("input"));
  });

  discountCheckbox.addEventListener("change", () => {
    if (discountCheckbox.checked){
        checkMark.classList.add('checked')
    } else{
        checkMark.classList.remove('checked')
    }
    searchInput.dispatchEvent(new Event("input"));
  });
};

export default search();
