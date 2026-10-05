const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de departamentos: ", (entradaDepartamentos) => {

    const departamentos = parseInt(entradaDepartamentos);

    rl.question("Ingrese la cantidad de empleados por departamento: ", (entradaEmpleados) => {

        const empleados = parseInt(entradaEmpleados);

        if (isNaN(departamentos) || departamentos <= 0) {
            console.log("Error: la cantidad de departamentos debe ser un número mayor a cero.");
            rl.close();
            return;
        }

        if (isNaN(empleados) || empleados <= 0) {
            console.log("Error: la cantidad de empleados debe ser un número mayor a cero.");
            rl.close();
            return;
        }

        console.log("\n===== MATRIZ DE ASISTENCIA =====");

        for (let departamento = 1; departamento <= departamentos; departamento++) {

            for (let empleado = 1; empleado <= empleados; empleado++) {

                if (departamento % 2 !== 0) {
                    console.log(
                        `Departamento ${departamento} - Empleado ${empleado} - Turno: Mañana`
                    );
                } else {
                    console.log(
                        `Departamento ${departamento} - Empleado ${empleado} - Turno: Tarde`
                    );
                }
            }
        }

        rl.close();
    });
});