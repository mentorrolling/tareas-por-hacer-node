let descripcion = {
    alias: 'd',
    demand: true
}
let completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualizar el estado de una tarea a completado', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea seleccionada', { descripcion })
    .help()
    .argv


module.exports = {
    argv
}