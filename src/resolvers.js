import { tareas } from './sample.js'
import userModel from './models/userModel.js'

export const resolvers = {
    Query : {
        hello: ()=>{
            return 'Hello World with graphQl'
        },
        greet : (root ,{name}, context)=>{
            console.log(context)
            return `Hello ${name}`
        },
        tareas: (root, args) => {
            return tareas
        },

        users : async() => {
            return await userModel.find({})
        }
    },

    Mutation: {
        crearTarea: (_, {input}) => {
            input._id = tareas.length
            tareas.push(input)
            return input
        },
        createUser : async ( _ , {input}) => {
            const newUser = new userModel(input)
            await newUser.save()
            return newUser
        },

        deleteUser : async (_, {_id})=>{
            return await userModel.findByIdAndDelete(_id)
        },

        updateUser : async (_, {_id, input}) => {
            return await userModel.findByIdAndUpdate(_id, input, {new : true})
        }
    }
}

export default resolvers


// a traves del resolver le decimos que es lo que tiene que hacer el query
// en rest es el equivalente al controlador
// el resolver esel que hace las consultas
// En args estamos recibiendo las entradas que le pasamos al query
// al hacer una mutacion a traves de la entrada le decimos los datos que va a tomar y luego especificamos los datos a recibir en la respuesta