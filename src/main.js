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
        return this.util.abs(number);
    }
}





