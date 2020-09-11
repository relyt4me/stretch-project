export const fetchDrinks = (type) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      } else {
        return response.json();
      }
  })
}
