const getData = () => {
  return fetch("https://ozone-hikiasi-default-rtdb.firebaseio.com/goods.json").then((response) =>
    response.json()
  );
};
export default getData;
