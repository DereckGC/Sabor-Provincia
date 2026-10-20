import mongoose from "mongoose";
const {Schema} = mongoose;

const LeadSchema = new Schema({
    name : {
        type: String,
        require : true
    },
    email : {
        type : String,
        require : true
    }
})

LeadSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

const Lead = mongoose.model('Lead', LeadSchema)

export default Lead