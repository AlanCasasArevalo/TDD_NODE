const handlers = require('./index');
describe('ENDPOINTS', () => {
    describe('USERS', () => {
        describe('GET', () => {
            it('return to user json', async () => {
                const axios = {
                    get: jest.fn().mockResolvedValue({ data : 1})
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };
                await handlers({axios}).get({}, res)

                expect(res.status.mock.calls[0][0]).toEqual(200);
                expect(res.json.mock.calls[0][0]).toEqual(1)

            });
        })
    })
});