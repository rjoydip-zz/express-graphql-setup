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

const queryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Simple hello world',
    fields: {
        hello: {
            type: GraphQLString,
            resolve(source, args) {
                return 'world';
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: queryType
})