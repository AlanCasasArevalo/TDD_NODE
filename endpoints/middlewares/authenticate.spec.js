const authenticate = require('./authenticate');
describe('MIDDLEWARES', () => {
    describe('Authentication', () => {
        it('should have id 1', () => {
            const req = {
                // El retorno del valor 1 indica que el usuario es administrador en este ejemplo
                header: jest.fn().mockReturnValue(1)
            };
            const res = {
                sendStatus: jest.fn()
            };
            const next = jest.fn();
            authenticate(req, res, next)
            expect(req.header.mock.calls).toEqual([['user_id']])
            // Con un solo array no es llamda la funcion con 2 si
            expect(res.sendStatus.mock.calls).toEqual([]);
            expect(next.mock.calls).toEqual([[]])
        })
    })
});
























