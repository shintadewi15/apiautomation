const assert = require('assert');


describe('API BOOKING', function () {
    it('Get user should be success', async function () {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const data = await response.json();

        var first_name = data.data[0].first_name;

        assert.strictEqual(response.status, 200);
        assert.strictEqual(first_name, 'Michael');
    })

    it('Get invalid user should be error, expected "Michael"', async function (){        
        const response = await fetch('https://reqres.in/api/users?page=2');
        const data = await response.json();

        var first_name = data.data[1].first_name;

        assert.strictEqual(response.status, 200);
        assert.notEqual(first_name, "Michael");
    })





    
})