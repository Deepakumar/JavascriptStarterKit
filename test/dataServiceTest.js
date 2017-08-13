/**
 * Created by Deepan on 8/13/2017.
 */

describe('Ajax Functions', function () {

    beforeEach(function() {
        jasmine.Ajax.install();
    });

    it("should execute the callback function on success", function () {
        spyOn($, "ajax").andCallFake(function(options) {
            options.success();
        });

        getNumberWord(123,function() {});

        expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual("http://numbersapi.com/123");
    });

    afterEach(function(){
        jasmine.Ajax.uninstall();
    });

});
