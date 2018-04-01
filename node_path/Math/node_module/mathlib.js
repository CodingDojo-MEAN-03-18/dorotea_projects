module.exports = {
    greet: function(){
        console.log("we are now using a module!");
    },

    add: function(num1, num2){
       console.log("the sum is:", num1 + num2);
     },

     multiply: function(num1, num2){
        console.log("the answer is :", num1 * num2);
      },

      square: function(num){
         console.log("the answer is :", Math.pow(num, 2));
       },

       random: function(num1, num2){
          console.log("the answer is :", Math.floor((Math.random()* num2)+ num1));
        },

}
