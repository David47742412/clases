//Problema 7:

function obtenerInformacion(materia) {
    materias = {
        fisica: ["Perez","Pedro","Jorge","Juan","María"],
        programacion: ["García","Pedro","Ricardo","Jorge"],
        logistica: ["Hernandez","Pedro","Ricardo","Jorge","Juan","María"],
        quimica: ["Rodriguez","Pedro","Ricardo","Jorge","Juan","María"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

function mostrarInformacion(materia) {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
        `);
    }
}

function cantidadDeClases(alumno) {
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `<b style='color:blue'>
    ${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
    <br><br>
    `;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logistica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("Juan"))
document.write(cantidadDeClases("Pedro"))
document.write(cantidadDeClases("Jorge"))
document.write(cantidadDeClases("María"))
document.write(cantidadDeClases("Ricardo"))