const fs = require('fs')



// fs.writeFile('message.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

let listadoHacer = []

const guardarDB = () => {

    let data = JSON.stringify(listadoHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;

    });

}

const cargarDB = () => {
    try {

        listadoHacer = require('../db/data.json')
    } catch (error) {
        listadoHacer = []
    }
}

const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoHacer.push(porHacer)


    guardarDB()
    return porHacer
}

const getListado = (valor) => {
    cargarDB()
    switch (valor) {
        case 'true':
            valor = true
            break;
        case 'false':
            valor = false
            break;
        default:
            valor = true
            break;
    }

    let resultado = listadoHacer.filter(function(item) {
        return item.completado === valor
    })

    return resultado



    // return listadoHacer = require('../db/data.json')
}

const actualizar = (descripcion, completado) => {

    cargarDB()
    let index = listadoHacer.findIndex(function(tarea) {
        return tarea.descripcion === descripcion
    })
    if (index >= 0) {
        listadoHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {

    cargarDB()

    let index = listadoHacer.findIndex(function(item) {
        return item.descripcion === descripcion
    })

    if (index >= 0) {

        listadoHacer.splice(index, 1)

        guardarDB()

        return true
    } else {
        return false
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}