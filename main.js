var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
  this.name = name;
  this.calories = calories;
  this.vegan = vegan;
  this.glutenFree = glutenFree;
  this.citrusFree = citrusFree;
  this.toString = function(){
  	return "name: " + this.name + "\n" +
  				 "colories: " + this.calories +   "\n" +
  				 "vegan: " + this.vegan +  "\n" +
  				 "gluten_free: " + this.glutenFree + "\n" +
  				 "citrus_free: " + this.citrusFree;
  }
};

var apple = new FoodItem('Macintosh', 100, true, true, false);
var taco = new FoodItem('Chicken', 300, false, false, false);
var snickers = new FoodItem('Snickers', 500, false, false, true);

console.log(apple.toString());
console.log(taco.toString());
console.log(snickers.toString());
















$(document).on('ready', function() {
  
});