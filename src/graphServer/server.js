var express = require('express');
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');

// dummy data
const laptops = [
  {
    ID: 0,
    name: "MacBookPro",
    ram: "16GB",
    cpu: "i7 7700HQ",
    price: 9000000
  },
  {
    ID: 1,
    name: "Lenovo",
    ram: "16GB",
    cpu: "i5 7200U",
    price: 8000000
  },
  {
    ID: 2,
    name: "HP1",
    ram: "32GB",
    cpu: "i7 7700HQ",
    price: 5000000
  },
  {
    ID: 3,
    name: "HP2",
    ram: "32GB",
    cpu: "i7 7700HQ",
    price: 5000000
  },
  {
    ID: 4,
    name: "HP3",
    ram: "32GB",
    cpu: "i7 7700HQ",
    price: 5000000
  },
];

var schema = buildSchema(`
  type Laptop {
    ID: Int!
    name: String
    cpu: String
    ram: String
    price: Float
  }

  type Query {
    laptops: [Laptop]
    findLaptop(ID: Int!): Laptop 
  }
`);

const findLaptop = (obj, args, context, info) => {
  const ID = obj.ID;
  return laptops.find(laptop => {
    return laptop.ID === ID;
  });
};

var root = {laptops: (id) => laptops, findLaptop}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));