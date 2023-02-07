//Problema 8:

let materias = {
        fisica: ["Perez","Pedro","Jorge","Juan","María"],
        programacion: ["García","Pedro","Ricardo","Jorge"],
        logistica: ["Hernandez","Pedro","Ricardo","Jorge","Juan","María"],
        quimica: ["Rodriguez","Pedro","Ricardo","Jorge","Juan","María"]
    }

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya están llenas<br><br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logistica: materias['logistica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logistica: materias['logistica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == "logistica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logistica: personas,
                quimica: materias['quimica']
            }
        }
        else if (materia == "quimica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logistica: materias['logistica'],
                quimica: personas
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
    }
}

document.write(materias['fisica'] + "<br><br>")

inscribir("Javier","fisica");
inscribir("Lucas","fisica");
inscribir("Jose","fisica");
inscribir("Laura","fisica");
inscribir("Raul","fisica");
inscribir("Mario","fisica");
inscribir("Roger","fisica");
inscribir("Arom","fisica");
inscribir("Gerardo","fisica");
inscribir("Alonso","fisica");
inscribir("Eduardo","fisica");
inscribir("Miguel","fisica");
inscribir("Antonio","fisica");
inscribir("Mayra","fisica");
inscribir("Isabel","fisica");
inscribir("Brandon","fisica");
inscribir("Ruben","fisica");
inscribir("Oscar","fisica");
inscribir("Ramiro","fisica");

document.write("<br>" + materias['fisica'])