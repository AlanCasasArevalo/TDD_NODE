const authenticate = require('./authenticate');
describe('MIDDLEWARES', () => {
    describe('Authentication', () => {
        it('should have id 1', () => {
            const req = {
                // El retorno del valor 1 indica que el usuario es administrador en este ejemplo
                headers: jest.fn().mockReturnValue(1)
            };
            const res = {
                sendStatus: jest.fn()
            };
            const next = jest.fn();
            authenticate(req, res, next)
            espect(req.header.mock.calls).toEqual([
                ['user_id']
            ])
            espect(res.sendStatus.mock.calls).toEqual([[]])
            espect(next.mock.calls).toEqual([[]])
        })
    })
});