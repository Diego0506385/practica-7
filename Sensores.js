const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de líneas de ensamblaje: ", (entradaLineas) => {

    const lineas = parseInt(entradaLineas);

    rl.question("Ingrese la cantidad de sensores por línea: ", (entradaSensores) => {

        const sensores = parseInt(entradaSensores);

        if (isNaN(lineas) || lineas <= 0) {
            console.log("Error: la cantidad de líneas debe ser un entero mayor a cero.");
            rl.close();
            return;
        }

        if (isNaN(sensores) || sensores <= 0) {
            console.log("Error: la cantidad de sensores debe ser un entero mayor a cero.");
            rl.close();
            return;
        }

        console.log("\n===== TABLERO DE SENSORES =====");

        for (let linea = 1; linea <= lineas; linea++) {

            for (let sensor = 1; sensor <= sensores; sensor++) {

                const rendimiento = linea * sensor * 5;

                if (rendimiento >= 50) {
                    console.log(
                        `Línea ${linea} - Sensor ${sensor} - Rendimiento: ${rendimiento} - Estado: Óptimo 🚀`
                    );
                } else if (rendimiento >= 25 && rendimiento <= 49) {
                    console.log(
                        `Línea ${linea} - Sensor ${sensor} - Rendimiento: ${rendimiento} - Estado: Mantenimiento Preventivo 🛠️`
                    );
                } else {
                    console.log(
                        `Línea ${linea} - Sensor ${sensor} - Rendimiento: ${rendimiento} - Estado: Falla de Lectura ❌`
                    );
                }
            }
        }

        rl.close();
    });
});
