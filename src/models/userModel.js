import { Schema, model} from "mongoose";


const userSchema = new Schema({
    firstname : {type : String, required : true},
    lastname : {type : String, required : true},
    age : {type : Number}
})

const userModel = model("users", userSchema)

export default userModel