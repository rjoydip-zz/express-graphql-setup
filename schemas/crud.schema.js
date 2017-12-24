const {
    buildSchema
} = require('graphql');

const schema = buildSchema(`
    input UserInput {
        name: String
        age: Int
    }

    type User {
        id: String
        name: String
        age: Int
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: String, input: UserInput): User
        deleteUser(id: String): User
    }

    type Query {
        getUsers: [User] 
    }
`);

module.exports = schema;