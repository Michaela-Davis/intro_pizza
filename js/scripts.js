// BACK-END BUSINESS LOGIC

function Pizza(size, cheese, meat, vegetable) {
  this.size = size;
  this.cheese = cheese;
  this.meat = meat;
  this.vegetable = vegetable;
}



// FRONT-END USER LOGIC

$(document).ready(function() {
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




  });
});
