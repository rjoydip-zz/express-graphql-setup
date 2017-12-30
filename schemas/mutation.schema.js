const {
    type,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInterfaceType
} = require('graphql');
const axios = require('axios');

const BASE_URL = `http://localhost:3000/users`;

const userType = new GraphQLObjectType({
    name: 'User',
    description: 'users fields and types',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    }
});

const queryType = new GraphQLObjectType({
    name: 'Query',
    description: 'query users',
    fields: {
        users: {
            type: new GraphQLList(userType),
            args: {},
            resolve: (source, args, context) => {
                return axios.get(`${BASE_URL}`).then(res => res.data);
            }
        },
        user: {
            type: new GraphQLList(userType),
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve: (source, args, context) => {
                return axios.get(`${BASE_URL}/${args.id}`).then(res => res.data);
            }
        }
    }
})

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation of the users',
    interfaces: [],
    fields: {
        addUser: {
            type: userType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                age: {
                    type: GraphQLInt
                }
            },
            resolve: (source, args, context) => {
                return axios.post(`${BASE_URL}`, args).then(res => res.data);
            }
        },
        updateUser: {
            type: userType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                age: {
                    type: GraphQLInt
                }
            },
            resolve: (source, args, context) => {
                return axios.put(`${BASE_URL}/${args.id}`, args).then(res => res.data);
            }
        },
        deleteUser: {
            type: userType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (source, args, context) => {
                return axios.delete(`${BASE_URL}/${args.id}`).then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
});