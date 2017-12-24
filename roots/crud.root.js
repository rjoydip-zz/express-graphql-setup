const axios = require('axios');

const BASE_URL = `http://localhost:3000/users`;

const root = {
    getUser: function ({
        id
    }) {
        return axios.get(`${BASE_URL}/${id}`).then(res => res.data);
    },
    getUsers: function () {
        return axios.get(`${BASE_URL}`).then(res => res.data);
    },
    createUser: function ({
        input
    }) {
        var id = require('crypto').randomBytes(10).toString('hex');
        var data = input;
        data['id'] = id;
        return axios.post(`${BASE_URL}`, data).then(res => res.data);
    },
    updateUser: function ({
        id,
        input
    }) {
        return axios.put(`${BASE_URL}/${id}`, input).then(res => res.data);
    },
    deleteUser: function ({
        id
    }) {
        return axios.delete(`${BASE_URL}/${id}`).then(res => res.data);
    }
};

module.exports = root;