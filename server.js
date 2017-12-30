const http = require('http');
const express = require('express');
const graphqlHTTP = require('express-graphql');

// const schema = require("./schemas/interface.schema");
// const schema = require("./schemas/mutation.schema");
// const schema = require("./schemas/hello.schema");
const schema = require("./schemas/relation.schema");

let PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.redirect('/graphql');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

http.createServer(app).listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});