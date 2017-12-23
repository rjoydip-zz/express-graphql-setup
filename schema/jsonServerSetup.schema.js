const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');
const axios = require('axios');

const BASE_URL = `http://localhost:3000/posts`;

const postType = new GraphQLObjectType({
    name: 'PostType',
    description: 'Post types',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        }
    })
});

const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Simple graphql setup for json server data',
    fields: {
        posts: {
            type: new GraphQLList(postType),
            description: 'Get all posts',
            resolve(parent, args) {
                return axios.get(`${BASE_URL}`).then(res => res.data);
            }
        },
        post: {
            type: postType,
            description: 'Get specific post',
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                return axios.get(`${BASE_URL}/${args.id}`).then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: rootQuery
});