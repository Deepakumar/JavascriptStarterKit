/**
 * Created by Deepan on 7/23/2017.
 */
describe('Hello world', function () {
    it('Add Numbers', function () {
            expect(mainFunctions.addNumbers(2,2)).toEqual(4);
    });

    it("Say Hello",function(){
        expect(mainFunctions.helloworld()).toEqual("hello");
    })
});
