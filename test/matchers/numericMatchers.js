/**
 * Created by Deepan on 8/13/2017.
 */
var toBeOddMatcher = {
    toBeOdd: function() {
        return {
            compare: function(actual){
                var result = {};

                result.pass = !! (actual & 1);

                if (!result.pass) {
                    result.message = "The number should be odd";
                }

                return result;
            }
        }
    }
}

var toBeEvenMatcher = {
    toBeEven: function() {
        return {
            compare: function(actual){
                var result = {};

                result.pass = ! (actual & 1);

                return result;
            }
        }
    }
}