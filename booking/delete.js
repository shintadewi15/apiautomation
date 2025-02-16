const assert = require('assert');
const fetch = require('node-fetch'); // Import node-fetch

describe('API BOOKING', function () {
    
    it('Delete user should be success', async function () {
        this.timeout(5000); // Timeout untuk operasi async

        // Kirim DELETE request ke Reqres API
        const response = await fetch('https://reqres.in/api/users/2', {
            method: "DELETE"
        });

        // **Tidak ada response body pada DELETE (harusnya kosong)**
        assert.strictEqual(response.status, 204, 'Response status should be 204 No Content');
    });

    it('Get invalid user should return error', async function () {        
        this.timeout(5000); // Timeout untuk operasi async

        // Kirim GET request ke user yang tidak ada
        const response = await fetch('https://reqres.in/api/users/23');

        assert.strictEqual(response.status, 404, 'Response status should be 404 Not Found');
    });  
});
