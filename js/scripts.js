// BACK-END BUSINESS LOGIC

function Pizza(size, cheese, meat, vegetable) {
  this.size = size;
  this.cheese = cheese;
  this.meat = meat;
  this.vegetable = vegetable;
}

// if (size === "small") {
//   var sizePrice = 10
// } else if (size === "large") {
//   var sizePrice = 14
// } else if (size === "xlarge") {
//   var sizePrice = 16
// }

Pizza.prototype.calculatePrice = function() {
  return (this.cheese.length * .75) + (this.meat.length * 1.5) + (this.vegetable.length);
  console.log((this.cheese.length * .75) + (this.meat.length * 1.5) + (this.vegetable.length));
}

// var pizzaOrder = []

// FRONT-END USER LOGIC

$(document).ready(function() {
  // Hide price well
  $(".calculate-price-well").hide();

  $("form#pizza-form").submit(function(event) {
    event.preventDefault();

    var size = $("input[name='small-large-xlarge']:checked").val();
    console.log(size);

    var cheese = []
    $("input:checkbox[name=cheese]:checked").each(function() {
        cheese.push($(this).val());
    });
    console.log(cheese);

    var meat = []
    $("input:checkbox[name=meat]:checked").each(function() {
        meat.push($(this).val());
    });
    console.log(meat);

    var vegetable = []
    $("input:checkbox[name=vegetable]:checked").each(function() {
        vegetable.push($(this).val());
    });
    console.log(vegetable);

    // Show price well after submit/calculate-price
    $(".calculate-price-well").show();

    // var price = new Pizza (size, cheese, meat, vegetable);
    // pizzaOrder.calculatePrice(price);
    //
    // $("#price").text(price);

  });
});
