const axios = require('axios');

const BASE_URL = `http://localhost:3000/users`;

const root = {
    getUsers: function() {
        return axios.get(`${BASE_URL}`).then(res => res.data);
    },
    createUser: function() {
        return axios.post(`${BASE_URL}`).then(res => res.data);
    },
    updateUser: function() {
        return axios.get(`${BASE_URL}`).then(res => res.data);
    }
};

module.exports = root;