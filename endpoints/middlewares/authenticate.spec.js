const authenticate = require('./authenticate');
describe('MIDDLEWARES', () => {
    describe('Authentication', () => {
        it.skip('should have id 1', () => {
            const req = {};
            const res = {};
            const next = jest.fn();

            authenticate(req, res, next)
        })
    })
});