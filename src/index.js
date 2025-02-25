import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import { connect } from "./database.js";
// este es el archivo que arranca todo el servidor


const app = express();
connect();

app.get('/', (req, res) => {
    res.send("HELLO")
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

app.listen(3000, (req, res) =>
    console.log("Server is running on port 3000")
)