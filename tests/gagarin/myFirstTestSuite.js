/**
 * Created by cneubauer on 05.02.16.
 */
// tests/gagarin/myFirstTestSuite.js

describe('My first Gagarin test suite', function () {
    var server = meteor();
    it('should just work', function () {
        return server.execute(function () { console.log('I am alive!'); });
    });
});
