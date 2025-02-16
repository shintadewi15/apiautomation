const assert = require('assert');
const fetch = require('node-fetch');

describe('API BOOKING', function () {
    it('Patch user should be success', async function () {
        const response = await fetch('https://reqres.in/api/users/2', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "morpheus",
                job: "zion resident"
            })
        });

        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.name, 'morpheus');
        assert.strictEqual(data.job, 'zion resident');
    });

    it('Get invalid user should return error, expected "Michael"', async function () {
        const response = await fetch('https://reqres.in/api/users/23');
        assert.strictEqual(response.status, 404);
    });
});
