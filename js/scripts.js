// BACK-END BUSINESS LOGIC

function Pizza(size, cheese, meat, vegetable) {
  this.size = size;
  this.cheese = cheese;
  this.meat = meat;
  this.vegetable = vegetable;
}

Pizza.prototype.calculatePrice = function() {
  var toppingPrice = ((this.cheese.length * .75) + (this.meat.length * 1.5) + (this.vegetable.length));

  if (this.size === "small") {
    var sizePrice = 10;
  } else if (this.size === "large") {
    var sizePrice = 14;
  } else if (this.size === "xlarge") {
    var sizePrice = 16;
  }

  var price = toppingPrice + sizePrice;
  return price;
}

// FRONT-END USER LOGIC

$(document).ready(function() {
  // Hide price well
  $(".calculate-price-well").hide();

  $("form#pizza-form").submit(function(event) {
    event.preventDefault();

    var size = $("input[name='small-large-xlarge']:checked").val();

    var cheese = []
    $("input:checkbox[name=cheese]:checked").each(function() {
        cheese.push($(this).val());
    });

    var meat = []
    $("input:checkbox[name=meat]:checked").each(function() {
        meat.push($(this).val());
    });

    var vegetable = []
    $("input:checkbox[name=vegetable]:checked").each(function() {
        vegetable.push($(this).val());
    });

    // Show price well after submit/calculate-price
    $(".calculate-price-well").show();

    var pizzaOrder = new Pizza(size, cheese, meat, vegetable);
    $("#price").text(pizzaOrder.calculatePrice());
  });
});
