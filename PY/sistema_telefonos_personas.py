# sistema_personas_telefonos.py

class SistemaPersonas:
    def __init__(self):
        self.personas = []
    
    def iniciar(self):
        print("Sistema de Registro de Personas y Teléfonos")
        self.cargar_persona()
    
    def cargar_persona(self):
        nombre = input("Nombre: ")
        apellido = input("Apellido: ")
        dni = input("DNI: ")
        telefonos = self.cargar_telefonos()
        
        self.personas.append([nombre, apellido, dni, telefonos])
        
        continuar = input("¿Desea cargar otra persona? (s/n): ").lower()
        if continuar == 's':
            self.cargar_persona()
        else:
            self.mostrar_datos()
    
    def cargar_telefonos(self):
        telefonos = []
        while True:
            telefono = input(f"Teléfono {len(telefonos) + 1} (deje vacío para terminar): ")
            if not telefono.strip():
                if len(telefonos) == 0:
                    print("Debe ingresar al menos un teléfono.")
                    continue
                else:
                    break
            telefonos.append(telefono)
        return telefonos
    
    def mostrar_datos(self):
        print("\nDatos registrados:")
        print("-----------------")
        for persona in self.personas:
            print(persona)

# Iniciar el sistema
if __name__ == "__main__":
    sistema = SistemaPersonas()
    sistema.iniciar()