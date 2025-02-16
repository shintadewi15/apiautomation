const assert = require('assert');
const fetch = require('node-fetch');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv();
addFormats(ajv);


const schema = {
    type: "object",
    properties: {
        page: { type: "integer" },
        per_page: { type: "integer" },
        total: { type: "integer" },
        total_pages: { type: "integer" },
        data: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: { type: "integer" },
                    email: { type: "string", format: "email" },
                    first_name: { type: "string" },
                    last_name: { type: "string" },
                    avatar: { type: "string", format: "uri" }
                },
                required: ["id", "email", "first_name", "last_name", "avatar"]
            }
        },
        support: {
            type: "object",
            properties: {
                url: { type: "string", format: "uri" },
                text: { type: "string" }
            },
            required: ["url", "text"]
        }
    },
    required: ["page", "per_page", "total", "total_pages", "data", "support"]
};

describe('API BOOKING', function () {
    it('Get invalid user should return error, expected "Michael"', async function () {        
        this.timeout(5000);

        const response = await fetch('https://reqres.in/api/users?page=2');
        const data = await response.json();

        const validate = ajv.compile(schema);
        const valid = validate(data);

        if (!valid) {
            console.error("Schema Validation Errors:", validate.errors);
        }

        console.log("Test Response:", JSON.stringify(data, null, 2));

        assert.ok(valid, "Response JSON harus sesuai dengan schema");

        const firstName = data.data[0].first_name;
        assert.strictEqual(firstName, "Michael");
    });
});