import rd from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let personas = [];

function iniciarSistema() {
  console.log("Sistema de Registro de Personas y Teléfonos");
  cargarPersona();
}

function cargarPersona() {
  rl.question("Nombre: ", (nombre) => {
    rl.question("Apellido: ", (apellido) => {
      rl.question("DNI: ", (dni) => {
        const telefonos = [];
        cargarTelefonos(nombre, apellido, dni, telefonos);
      });
    });
  });
}

function cargarTelefonos(nombre, apellido, dni, telefonos) {
  rl.question(
    `Teléfono ${telefonos.length + 1} (deje vacío para terminar): `,
    (telefono) => {
      if (telefono.trim() === "") {
        if (telefonos.length === 0) {
          console.log("Debe ingresar al menos un teléfono.");
          cargarTelefonos(nombre, apellido, dni, telefonos);
        } else {
          personas.push([nombre, apellido, dni, telefonos]);
          preguntarContinuar();
        }
      } else {
        telefonos.push(telefono);
        cargarTelefonos(nombre, apellido, dni, telefonos);
      }
    }
  );
}

function preguntarContinuar() {
  rl.question("¿Desea cargar otra persona? (s/n): ", (respuesta) => {
    if (respuesta.toLowerCase() === "s") {
      cargarPersona();
    } else {
      mostrarDatos();
      rl.close();
    }
  });
}

function mostrarDatos() {
  console.log("\nDatos registrados:");
  console.log("-----------------");
  personas.forEach((persona) => {
    console.log(persona);
  });
}

// Iniciar el sistema
iniciarSistema();
