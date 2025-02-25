import mongoose from 'mongoose';


export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql',
            {
                useNewUrlParser : true
            }
        )
    } catch (error) {
        console.error(error)
    }


    console.log('>>>> Database connected')
}