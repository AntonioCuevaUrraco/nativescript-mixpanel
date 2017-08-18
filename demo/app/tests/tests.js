var Mixpanel = require("nativescript-mixpanel").Mixpanel;
var mixpanel = new Mixpanel();

describe("greet function", function() {
    it("exists", function() {
        expect(mixpanel.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(mixpanel.greet()).toEqual("Hello, NS");
    });
});