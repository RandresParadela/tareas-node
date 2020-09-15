const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado (true/false) la tarea'
}

// ----------------------

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea existente', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}