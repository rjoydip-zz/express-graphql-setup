const http = require('http');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require("./schema/jsonServerSetup.schema");
// const schema = require("./schema/helloWorldServerSetup.schema");

let PORT = process.env.PORT || 8000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

http.createServer(app).listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});