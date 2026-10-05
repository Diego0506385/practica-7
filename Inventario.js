const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el número de lotes a revisar: ", (entradaLotes) => {

    const lotes = parseInt(entradaLotes);

    rl.question("Ingrese el número de cajas por lote: ", (entradaCajas) => {

        const cajas = parseInt(entradaCajas);

        if (isNaN(lotes) || lotes <= 0) {
            console.log("Error: el número de lotes debe ser un entero mayor a cero.");
            rl.close();
            return;
        }

        if (isNaN(cajas) || cajas <= 0) {
            console.log("Error: el número de cajas debe ser un entero mayor a cero.");
            rl.close();
            return;
        }

        console.log("\n===== CONTROL DE INVENTARIO =====");

        for (let lote = 1; lote <= lotes; lote++) {

            for (let caja = 1; caja <= cajas; caja++) {

                const codigo = lote * caja * 2;

                if (codigo % 4 === 0) {
                    console.log(
                        `Lote ${lote} - Caja ${caja} - Código: ${codigo} - Revisión Prioritaria `
                    );
                } else {
                    console.log(
                        `Lote ${lote} - Caja ${caja} - Código: ${codigo} - Aprobado `
                    );
                }
            }
        }

        rl.close();
    });
});

