// All the module pattern variations described below are
// from 
// https://toddmotto.com/mastering-the-module-pattern/

// Anonymous Object Literal return
var i = 10
var Module = (function IIFE() {
  var _privateMethod = function privateMethod() {
      console.log(i)
  };
  
  return {
    publicMethodOne: function publicMethodOne () {
        _privateMethod()
    },
    publicMethodTwo: function publicMethodTwo () {

    },
    publicMethodThree: function publicMethodThree () {

    }
  };

})();

// Locally scoped Object Literal 
var i = 10
var Module = (function IIFE() {

    // locally scoped Object
    var publicAPI = {};
  
    // declared with `var`, must be "private"
    var _privateMethod = function privateMethod () {
        console.log(i)
    };
  
    publicAPI.publicMethod = function publicMethod () {
        _privateMethod()
    };
    
    return publicAPI;
  
  })();

  // Stacked locally scoped Object Literal
  var i = 10
  var Module = (function IIFE () {

    var _privateMethod = function () {
        console.log(i)
    };

    var publicAPI = {
        publicMethodOne:  function publicMethodOne () {
            _privateMethod()
      },
        publicMethodTwo:  function publicMethodOne () {
        
      }
    };
    
    return publicAPI;
  })();

  // Revealing Module Pattern
  var i = 10
  var Module = (function IIFE () {

    var _privateMethod = function privateMethod() {
      console.log(i)
    };
  
    var publicMethodOne = function publicMethodOne () {
        _privateMethod()
    };
  
    var publicMethodTwo = function publicMethodTwo () {
        _privateMethod()
    };
    
    return {
        publicMethodOne: publicMethodOne,
        publicMethodTwo: publicMethodTwo
    };
  
  })();


var Module = (function IIFE () {

    var _privateMethod = function (message) {
        console.log(message);
    };

    var publicMethod = function (text) {
        _privateMethod(text);
    };

    return {
        publicMethod: publicMethod
    };
})();

// Example of passing data into a private method
// the private method will then `console.log()` 'Hello!'
Module.publicMethod('Hello!');


var Module = (function IIFE () {
    var _privateArray = [];
    var publicMethod = function publicMethod (somethingOfInterest) {
        _privateArray.push(somethingOfInterest);
    };
    return {
        publicMethod: publicMethod
    };
})();

Module.publicMethod(2)
