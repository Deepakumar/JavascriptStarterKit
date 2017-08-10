/**
 * Created by Deepan on 7/23/2017.
 */
describe('Hello world', function () {

    var outPut;
    var math = new myMath();
    var func=new mainFunctions(math);

    beforeEach(function(){
        outPut=4;
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
});
