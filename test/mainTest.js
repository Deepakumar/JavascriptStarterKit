/**
 * Created by Deepan on 7/23/2017.
 */
describe('Numeric Functions', function () {

    var outPut;
    var math = new myMath();
    var func=new mainFunctions(math);

    beforeEach(function(){
        outPut=4;
        jasmine.addMatchers(toBeOddMatcher);
        jasmine.addMatchers(toBeEvenMatcher);
    });

    it('Add Numbers', function () {
            expect(func.addNumbers(2,2)).toEqual(outPut);
    });

    it("Subtraction Numbers",function(){
        expect(func.subtractNumbers(10,6)).toEqual(outPut);
    })

    it("Abs Value Using MyMath Util",function(){
        spyOn(math, "abs");

        var abs =func.calculateAbs(4);

        expect(math.abs).toHaveBeenCalled();
        expect(math.abs).toHaveBeenCalledWith(jasmine.any(Number));
    });
    
    it("Sum of Number array",function(){
        spyOn(math, "add").and.callThrough();

        var sum = func.sumOfNumbers([2,4,6,8]);
        expect(sum).toEqual(20);
        expect(math.add.calls.any()).toBe(true);
        expect(math.add.calls.count(4)).toBe(4);

        var calls =math.add.calls.all();

        for(x=0,length = calls.length; x < length; x += 1)
        {
            expect(calls[x].object.id);
        }
    });

    it("Should return Odd Number",function(){
        var output = func.addNumbers(1,2);

        expect(3).toBeOdd();
    });

    it("Should return Even Number",function(){
        var output = func.addNumbers(1,2);

        expect(2).toBeEven();
    });

    
});
