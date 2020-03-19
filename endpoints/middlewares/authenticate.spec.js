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
        it('should fail if user is not one with id 1', () => {
            const req = {
                // El retorno del valor 1 indica que el usuario es administrador en este ejemplo
                header: jest.fn().mockReturnValue(2)
            };
            const res = {
                sendStatus: jest.fn()
            };
            const next = jest.fn();
            authenticate(req, res, next)
            expect(req.header.mock.calls).toEqual([['user_id']]);
            // Se tiene que recibir un 403 en caso de que no sea un id 1 en el header
            expect(res.sendStatus.mock.calls).toEqual([[
                403
            ]]);
            // Se obtendra un solo array debido a que no tiene que ser llamada la funcion de next por haber recibido el 403
            expect(next.mock.calls).toEqual([])
        })

    })
});
























