/**
 * Created by Deepan on 8/13/2017.
 */
describe("The Add After Delay Method",function() {

    var outPut;
    var math = new myMath();
    var func=new mainFunctions(math);
    var callbackFunc = function(){};

    beforeEach(function(){
        spyOn(math, "add");

        jasmine.clock().install();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });

    it("Should invoke  the add method after a specified delay",function(){

        func.addAfterDelay(1000,callbackFunc,2,4);

        expect(math.add).not.toHaveBeenCalled();

        jasmine.clock().tick(1001);

        expect(math.add).toHaveBeenCalled();
    });

});
