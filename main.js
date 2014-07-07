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

















$(document).on('ready', function() {
  
});