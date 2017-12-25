const http = require('http');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.get('/', (req, res) => {
    res.redirect('/graphql');
});

app.use('/graphql', graphqlHTTP({
    schema: require("./schemas/crud.schema"),
    rootValue: require("./roots/crud.root"),
    graphiql: true
}));

let PORT = process.env.PORT || 8000;
http.createServer(app).listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});