const {
    buildSchema
} = require('graphql');

const schema = buildSchema(`
    input UserInput {
        name: String
        age: Int
    }

    type User {
        id: ID!
        name: String
        age: Int
    }

    type Mutation {
        createUser(input: UserInput): [User]
        updateUser(id: ID!, input: UserInput): [User]
    }

    type Query {
        getUsers: [User] 
    }
`);

module.exports = schema;