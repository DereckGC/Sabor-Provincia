import mongoose from "mongoose";

const connectBD = async() => {
    try {
        await mongoose.connect(process.env.DB_CS, {
            
        })
        console.log("Conexion exitosa de la BD")
    } catch (error) {
        console.log("Falla en la conexion de la base de datos")
        process.exit(1)
    }
}

export default connectBD