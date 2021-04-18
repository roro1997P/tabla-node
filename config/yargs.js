const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Establece hasta que número multiplicar nuestra tabla',
        default: 10,
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw 'Tiene que ser un número'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    })   
    .argv;

module.exports = argv;