const handlers = require('./index');
describe('ENDPOINTS', () => {
    describe('USERS', () => {
        describe('GET', () => {
            it('return to user json', async () => {
                const axios = {
                    get: jest.fn().mockResolvedValue({data: 1})
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };
                await handlers({axios}).get({}, res)

                expect(res.status.mock.calls[0][0]).toEqual(200);
                expect(res.json.mock.calls[0][0]).toEqual(1)

            });
        });
        describe('POST', () => {
            it('create a resource', async () => {
                const axios = {
                    post: jest.fn().mockResolvedValue({data: 1})
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };
                const req = {
                    body: 'request body'
                };
                await handlers({ axios }).post(req, res)

                expect(res.status.mock.calls[0][0]).toEqual(201);
                expect(res.json.mock.calls[0][0]).toEqual(1)
                expect(axios.post.mock.calls).toEqual([
                    ['https://jsonplaceholder.typicode.com/users', 'request body']
                ])
            });
        });
        describe('PUT', () => {
            it('update a resource', async () => {
                const axios = {
                    put: jest.fn().mockResolvedValue({data: 1})
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };
                const req = {
                    body: 'request body',
                    params: {
                        id: 12
                    }
                };
                await handlers({ axios }).put(req, res);

                expect(res.status.mock.calls[0][0]).toEqual(204);
                expect(res.json.mock.calls[0][0]).toEqual(1);
                expect(axios.put.mock.calls).toEqual([
                    [`https://jsonplaceholder.typicode.com/users/12`, 'request body']
                ])
            });
        });
        describe('DELETE', () => {
            it('delete a resource', async () => {
                const axios = {
                    // El mock resolved value solo se envia en caso de que nosotros queramos devolver algo en el delete
                    // por ejemplo el array de los valores que queden en la api
                    delete: jest.fn().mockResolvedValue({data: 1})
                };
                const res = {
                    status: jest.fn().mockReturnThis(),
                    json: jest.fn()
                };
                const req = {
                    body: 'request body',
                    params: {
                        id: 12
                    }
                };
                await handlers({ axios }).delete(req, res);

                expect(res.status.mock.calls[0][0]).toEqual(204);
                expect(res.json.mock.calls[0][0]).toEqual(1);
                expect(axios.delete.mock.calls).toEqual([
                    [`https://jsonplaceholder.typicode.com/users/12`]
                ])
            });
        });
    })
});