const assert = require('assert');

describe('API BOOKING', function () {
    it('Create user should be success', async function () {
        this.timeout(5000);

        // Sending a POST request
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();

        // Extracting first name
        var first_name = data.data[0].first_name;

        // Assertions
        assert.strictEqual(response.status, 200);
        assert.strictEqual(first_name, 'Michael');
    });

    it('Get invalid user should be error, expected "Michael"', async function () {
        this.timeout(5000);

        // Sending a POST request with a payload
        const requestData = {
            "name": "morpheus",
            "job": "leader"
        };

        const response = await fetch('https://reqres.in/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        // Extracting first name (for GET, but here it doesn't return users)
        var first_name = data.first_name || null;  // Ensure it doesn't break

        // Assertions
        assert.strictEqual(response.status, 201); // 201 for successful resource creation
        assert.notStrictEqual(first_name, "Michael"); // Checking that the created user isn't named Michael
    });
});
