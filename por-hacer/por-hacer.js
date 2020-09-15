const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    // writeFile sobreescribe siempre fichero
    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);
    });
}

//
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        // si esta vacio el fichero lo inicializamos a []
        listadoPorHacer = [];
    }

}

// 
const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false

    };

    // recuperamos los datos cargados en JSON
    cargarDB();

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

//
const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    // recuperamos los datos cargados en JSON
    cargarDB();
    // buscamos tarea a borrar. 2 maneras
    // let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);

    // if (index >= 0) {
    //     let haBorrado = listadoPorHacer.splice([index], 1);
    //     if (haBorrado) {
    //         guardarDB();
    //         return true;
    //     } else {
    //         return false;
    //     }

    // } else {
    //     return false;
    // }

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length !== nuevoListado.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}