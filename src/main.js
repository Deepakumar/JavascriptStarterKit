/**
 * Created by Deepan on 7/23/2017.
 */
var mainFunctions =  function(util) {
    this.util = util;

    this.addNumbers =  function(n1,n2){
        return n1 + n2;
    };

    this.subtractNumbers = function(minuend,subtrahend){
        return minuend - subtrahend;
    };

    this.calculateAbs = function(number){
        return util.abs(number);
    }
    
    this.sumOfNumbers = function(numbers){
        var currentValue=0;
        numbers.forEach(function(number){
            currentValue = util.add(currentValue,number);
        });
        return currentValue;
    }

    this.addAfterDelay = function(delay,callback,num1,num2){
        setTimeout(function() {
            callback(util.add(num1,num2));
        },delay);
    }
}





