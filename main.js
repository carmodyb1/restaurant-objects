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
  this.dietaryRestriction = function(restriction) {
    for(var i = 0; i < this.ingredients.length; i++) {
      if(ingredients[i][restriction] === false) {
        return 'you can\'t eat this';
      }
      else {
        return 'Go ahead, its fine!';
      }
    };
  };
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
Menu.prototype = new SuperMenu();
Menu.prototype.constructor = Menu;

var Franchise = function() {
  this.toString = function() {
    return 'Name: ' + this.name + '\n' +
            'description: ' + this.description + '\n' +
            'menu: \n' + 
            this.menu.toString();
  }
}

var Restaurant = function(name, description, menu) {
  this.name = name;
  this.description = description;
  this.menu = menu;
};
Restaurant.prototype = new Franchise();
Restaurant.prototype.constructor = Restaurant;

var Person = function() {
  this.toString = function() {
    return 'dietary Preference: ' + this.dietaryPreference;
  };
};

var Customer = function(dietaryPreference) {
  this.dietaryPreference = dietaryPreference;	
};
Customer.prototype = new Person();
Customer.prototype.constructor = Customer;







// Test Data
var drink1 = new Drink('pepsi', 'frothy goodness', 2, 'lots and lots of sugar');
var plate1 = new Plate('pizza', 'a pie of another type', 10, [taco, snickers]);
var plate2 = new Plate('salad', 'kind of like pizza but not really', 14, [apple]);
var order = new Order([plate1, plate2]);
var menu = new Menu([plate1, plate2]);
var restaurant = new Restaurant('Bob\'s Seafood', 'Pizza and salad, and lots of cheese.', menu);
var customer = new Customer('carnivore');




$(document).on('ready', function() {
  
});