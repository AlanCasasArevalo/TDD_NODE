const handlers = ({ axios })  => ({
    get: async (req, res) => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (data && typeof data !== 'undefined') {
            res.status(200).json(data)
        } else {
            res.status(400).json({
                error: 'No se ha podido realizar la peticion '
            })
        }
    },

    post: async (req, res) => {
        const { body } = req;
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', body);
        if (data && typeof data !== 'undefined') {
            res.status(201).json(data)
        } else {
            res.status(400).json({
                error: 'No se ha podido realizar la peticion '
            })
        }
    },

    put: async (req, res) => {
        const { id } = req.params;
        const { body } = req;
        const { data } = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);
        if (data && typeof data !== 'undefined') {
            res.status(204).json(data)
        } else {
            res.status(400).json({
                error: 'No se ha podido realizar la peticion'
            })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (data && typeof data !== 'undefined') {
            res.status(204).json(data)
        } else {
            res.status(400).json({
                error: 'No se ha podido realizar la peticion '
            })
        }
    },

});

module.exports = handlers;