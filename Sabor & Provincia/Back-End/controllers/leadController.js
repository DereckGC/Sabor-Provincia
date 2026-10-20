import Lead from '../models/lead.js';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';

const guardarInstanciaJSON = async (instancia, nombreArchivo) => {
  try {
    const rutaArchivo = join(process.cwd(), nombreArchivo);
    let datosActuales = [];

    try {
      const contenido = await readFile(rutaArchivo, 'utf-8');
      const datosParseados = JSON.parse(contenido);
      
      if (Array.isArray(datosParseados)) {
        datosActuales = datosParseados;
      }
    } catch (errorLectura) {
      if (errorLectura.code !== 'ENOENT') {
        throw errorLectura;
      }
    }

    datosActuales.push(instancia);

    const jsonString = JSON.stringify(datosActuales, null, 2);
    await writeFile(rutaArchivo, jsonString, 'utf-8');
    console.log(`Archivo actualizado exitosamente en: ${rutaArchivo}`);
  } catch (error) {
    console.error('Error al guardar el archivo JSON:', error);
  }
};

const createLead = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const lead = new Lead({ name, email });
    
    await guardarInstanciaJSON(lead, "./data/lead.json");
    
    return res.status(201).json(lead);
  } catch (error) {
    return next(error);
  }
};

export { createLead };