
module.exports.animalsNames=function() {
      
    var animalsName=[];
    animalsName.push({Tiger:"Tiger".toUpperCase(),Elephant:"Elephant".toUpperCase(),Lion:"Lion".toUpperCase(),
    Bear:"Bear".toUpperCase(),Leopard:"Leopard".toUpperCase(),Buffalo:"Buffalo".toUpperCase(),Camel:"Camel".toUpperCase(),Dea
    :"Deer".toUpperCase(),Cow:"Cow".toUpperCase(),Donkey:"Donkey".toUpperCase()});
    return animalsName;
    }
    
module.exports.genCharArray=function(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
     for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
       }
          return a;
      }
      module.exports.animalsNames1=function () {
          var animalNames=["tiger".toUpperCase(),
          "elephant".toUpperCase(),
         "Lion".toUpperCase(),
          "Bear".toUpperCase(),
          "leopard".toUpperCase(),
          "buffalo".toUpperCase(),
          "camel".toUpperCase(),
          "Deer".toUpperCase(),
          "Cow".toUpperCase(),
          "donkey".toUpperCase()];
          return animalNames;
          
      }