import sqlite3
import shutil
import os

# Conexión a la base de datos SQLite
conexion = sqlite3.connect('patentes.db')

# Crear un cursor para ejecutar comandos SQL
cursor = conexion.cursor()

# Crear la tabla 'patentes' si no existe
cursor.execute('''
    CREATE TABLE IF NOT EXISTS patentes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patente TEXT UNIQUE NOT NULL
    )
''')

# Confirmar los cambios
conexion.commit()

# Función para agregar una patente
def agregar_patente(patente):
    try:
        cursor.execute('INSERT INTO patentes (patente) VALUES (?)', (patente,))
        conexion.commit()
        print(f"Patente {patente} agregada con éxito.")
    except sqlite3.IntegrityError:
        print(f"La patente {patente} ya está registrada.")

# Función para listar todas las patentes
def listar_patentes():
    cursor.execute('SELECT patente FROM patentes')
    patentes = cursor.fetchall()
    
    if patentes:
        print("Patentes registradas:")
        for patente in patentes:
            print(f"- {patente[0]}")
    else:
        print("No hay patentes registradas.")

# Función para buscar una patente
def buscar_patente(patente):
    cursor.execute('SELECT patente FROM patentes WHERE patente = ?', (patente,))
    resultado = cursor.fetchone()
    
    if resultado:
        print(f"La patente {resultado[0]} está registrada.")
    else:
        print(f"La patente {patente} no está registrada.")

# Función para hacer una copia de seguridad de la base de datos
def hacer_backup():
    try:
        if os.path.exists('patentes.db'):
            shutil.copy('patentes.db', 'patentes_backup.db')
            print("Copia de seguridad creada con éxito: patentes_backup.db")
        else:
            print("No se encontró la base de datos para hacer el respaldo.")
    except Exception as e:
        print(f"Error al hacer la copia de seguridad: {e}")

# Menú de opciones
def menu():
    while True:
        print("\nOpciones:")
        print("1. Agregar patente")
        print("2. Listar patentes")
        print("3. Buscar patente")
        print("4. Hacer copia de seguridad")
        print("5. Salir")
        
        opcion = input("Selecciona una opción: ")

        if opcion == "1":
            nueva_patente = input("Ingresa la patente (formato ABC123 o ABC12D): ").upper()
            agregar_patente(nueva_patente)
        elif opcion == "2":
            listar_patentes()
        elif opcion == "3":
            patente_buscar = input("Ingresa la patente a buscar: ").upper()
            buscar_patente(patente_buscar)
        elif opcion == "4":
            hacer_backup()
        elif opcion == "5":
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Inténtalo nuevamente.")

# Ejecutar el menú
menu()

# Cerrar la conexión a la base de datos cuando el programa termina
conexion.close()
