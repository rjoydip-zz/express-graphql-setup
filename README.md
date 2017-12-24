# graphql-examples

Graphql examples.

# Installation

```sh
$ git clone https://github.com/rjoydip/simple-graphql-setup.git
$ cd simple-graphql-setup
$ npm install
```

# Run graphql server

```sh
$ npm start
```

Graphql server [localhost:8000](http://localhost:8000/graphql) and json server [localhost:3000](http://localhost:3000)

# Examples

* [JSON server schema](https://github.com/rjoydip/graphql-examples/blob/master/schema/jsonServerSetup.schema.js)
* [Hello world schema](https://github.com/rjoydip/graphql-examples/blob/master/schema/helloWorldServerSetup.schema.js)

# Test query

- [Aliases](http://graphql.org/learn/queries/#aliases)

```
{
  getPosts: posts {
    id
  }
}
```

or

```
query {
  getPosts: posts {
    ...info
  }
  getPost: post(id: 1) {
    ...info
  }
}

fragment info on Post {
  id
  name
}
```

- [Arguments](http://graphql.org/learn/queries/#arguments)

```
query {
  post(id: 1) {
    id,
    name
  }
}
```

- [Field Aliases](http://graphql.org/learn/queries/#operation-name)

```
query FetchPostData {
  getPosts: posts {
    id,
    name
  }
  getPost: post(id: 2) {
    id,
    name
  }
}
```

- [Fragments](http://graphql.org/learn/queries/#fragments)

```
query FetchPostData {
  getPosts: posts {
    ...info
  }
  getPost: post(id: 2) {
    ...info
  }
}

fragment info on Post {
  id
  name
}
```

- [Variables](http://graphql.org/learn/queries/#variables)

```
query ($id: Int!) {
  # ($id: Int = 1)
  post(id: $id) {
    ...info
  }
}

fragment info on Post {
  id
  name
}
```

***QUERY VARIALBES***

```
{
  "id": 5
}
```

> Note: Variable definitions can be optional or required. In the case above, since there i an `!` it's not optional. But if the field you are passing the variable into requires a non-null argument, then the variable has to be required as well.

- [Directives](http://graphql.org/learn/queries/#directives)

```
query ($id: Int = 1, $showInfo: Boolean = true) {
  post(id: $id) {
    ...info @include(if: $showInfo)
  }
}

fragment info on Post {
  id
  name
}
```

***QUERY VARIALBES***

```
{
  "id": 5,
  "showInfo": false
}
```

***Skip a field***

```
query ($id: Int = 1, $showInfo: Boolean = true) {
  post(id: $id) {
    id,
    name @skip(if: $showInfo)
  }
}
```

***QUERY VARIALBES***

```
{
  "id": 5,
  "showInfo": true
}
```

