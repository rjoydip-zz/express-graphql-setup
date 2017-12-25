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
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLInt)
                }
            },
            resolve: require('../resolvers/hello.resolver')
        }
    }
});

module.exports = new GraphQLSchema({
    query: queryType
})