import conectarBD from "./db/db";
import { UserModel } from "./models/user";

const main = async () => {
    await conectarBD();
    await UserModel.create({
        correo:"juan@gmail.com",
        identificacion:"213454",
        nombre: "Juan",
        apellido:"castañeda"
    })
    .then((u) => {
        console.log("Usuario creado con exito", u);
    })
    .catch((e)=>{
        console.log("Error creando el usuario", e)
    });
};



main();