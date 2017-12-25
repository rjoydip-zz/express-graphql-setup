# graphql-examples

Graphql examples using `build-schema`.

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

* [Hello schema](https://github.com/rjoydip/graphql-examples/blob/master/schemas/hello.schema.js) and [Hello root](https://github.com/rjoydip/graphql-examples/blob/master/roots/hello.root.js)

* [CRUD schema](https://github.com/rjoydip/graphql-examples/blob/master/schemas/crud.schema.js) and [CRUD root](https://github.com/rjoydip/graphql-examples/blob/master/roots/crud.root.js)

# Tests

***Hello wrold***

```
query {
  hello
}
```

***CRUD***

```
query {
    # get all users
    users: getUsers {
        id
        name
        age
    }

    # get specific user
    user: getUser(id: $id) {
        id
        name
        age
    }
}

# Mutation is for create/delete/update 
# user data
mutation ($id: String) {
    # create user
	createUser(input: {
	    name: $name, 
	    age: $age
	}) {
	    name,
	    age
	}	
  
    # update user
	updateUser(id: $id, input: {
	    name: $name, 
	    age: $age
	}) {
	    name,
	    age
	}
  
    # delete user
    deleteUser(id: $id) {
        name,
        age
    }
}
```