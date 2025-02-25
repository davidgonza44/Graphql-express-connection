import resolvers from "./resolvers.js"
import { makeExecutableSchema } from "graphql-tools"
// le decimos que es lo que puede consultar el cliente

export const  typeDefs = `
    type Query {
        hello : String
        greet(name : String!) : String
        tareas: [Tarea]
        users : [User]
    }

    type Tarea {
        _id : ID
        titulo : String!
        descripcion : String!
        estado : String!
    },

    type User {
        _id : ID
        firstname : String!
        lastname : String!
        age : Int

    }

    type Mutation {
    crearTarea(input : TareaInput) : Tarea
    createUser(input: UserInput) : User
    deleteUser(_id : ID!) : User
    updateUser(_id : ID!, input: UserInput): User
    }

    input TareaInput {
        titulo : String!
        descripcion : String!
        estado : String!
    }

    input UserInput {
        firstname : String!
        lastname : String!
        age : Int
    }

`

// definimos que es lo que podemos consultar
export default makeExecutableSchema({
    typeDefs,
    resolvers
})

