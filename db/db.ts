import { connect } from 'mongoose';

const conectarBD = async () => {
  return await connect("mongodb+srv://admin:AdminProyectos@gestionproyectosbackend.ecxrb.mongodb.net/GestionProyectos?retryWrites=true&w=majority")
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;