var Food = function() {
this.toString = function(){
  	return "name: " + this.name + "\n" +
  				 "colories: " + this.calories +   "\n" +
  				 "vegan: " + this.vegan +  "\n" +
  				 "gluten_free: " + this.glutenFree + "\n" +
  				 "citrus_free: " + this.citrusFree;
  }
}

var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
  this.name = name;
  this.calories = calories;
  this.vegan = vegan;
  this.glutenFree = glutenFree;
  this.citrusFree = citrusFree;
};
FoodItem.prototype = new Food();
FoodItem.prototype.constructor = FoodItem;


var apple = new FoodItem('Macintosh', 100, true, true, false);
var taco = new FoodItem('Chicken', 300, false, false, false);
var snickers = new FoodItem('Snickers', 500, false, false, true);

console.log(apple.toString());
console.log(taco.toString());
console.log(snickers.toString());

var Beverage = function(){ 
  this.toString = function(){
    return "name: " + this.name + "\n" +
           "description: " + this.description + "\n" +
           "price: " + this.price + "\n" +
           "ingredients: " + this.ingredients;
  }
}


var Drink = function(name, description, price, ingredients) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;
};
Drink.prototype = new Beverage();
Drink.prototype.constructor = Drink;

var Dish = function(){
  this.toString = function(){
    return "name: " + this.name + "\n" +
           "description: " + this.description + "\n" +
           "price: " + this.price + "\n" +
           "ingredients: " + this.ingredients;
  }
}

var Plate = function(name, description, price, ingredients) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;
};
Plate.prototype = new Dish();
Plate.prototype.constructor = Plate;




var Ticket = function(){
  this.toString = function(){

    var string = "";
    this.platesArray.forEach(function(item){
      string += item.toString();
      string += "\n\n"
    })  
    return string;  
  }

}

var Order = function(platesArray) {
  this.platesArray = platesArray;

};
Order.prototype = new Ticket();
Order.prototype.constructor = Order;





var SuperMenu = function() {
  this.toString = function() {
    var string = "";
    this.platesArray.forEach(function(item){
      string += item.toString();
      string += "\n\n"
    })
    return string;
  }	
}


var Menu = function(platesArray) {
  this.platesArray = platesArray;
}

var Restaurant = function(name, description, menu) {
  this.name = name;
  this.description = description;
  this.menu = menu;
};

var Customer = function(dietaryPreference) {
  this.dietaryPreference = dietaryPreference;	
};









$(document).on('ready', function() {
  
});