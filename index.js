var ingredients = ["pasta", "oil", "tomato", "salut"];
console.log(ingredients);

var extraSpice = [...ingredients, "paper"];
console.log(extraSpice);

var extraAtStart = ["barbecue", ...extraSpice];
console.log(extraAtStart);

extraAtStart.pop();
extraAtStart.shift();
console.log(extraAtStart);

extraAtStart.splice(2, 2, "cheese", "paperoni");
console.log(extraAtStart);

const mainIngredient = [...extraAtStart];
console.log("The main ingrediant : " + mainIngredient[0])

exceptMain(mainIngredient, 0);

function exceptMain(mainIngredients, index) {
  var result = mainIngredients.splice(index, 1);
  console.log(mainIngredients);
}
