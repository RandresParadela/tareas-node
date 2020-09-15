// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log(argv);

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log('======== Por Hacer ========'.green);

        for (let tarea of listado) {
            console.log('>', tarea.descripcion);
            console.log('  Estado: ', tarea.completado ? 'Completada'.green : 'Pendiente'.red);
        }

        console.log('==========================='.green);

        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:

}