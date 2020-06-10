# API CRUD de empleados utilizando NodeJS y MongoDB

## Instalación

* git clone https://github.com/kervinmiranda/nodejsapi.git
* cd api-rest-node
* npm install

## Configuración

Configure el archivo ** config.js ** ubicado en la carpeta de configuración con el puerto deseado para ejecutar el servidor web y también ** uri ** de MongoDB

## Ejecutando el proyecto localmente

* npm start

## Ejecutar el proyecto en Docker Containers
* Requisitos
    * Tener instalado Docker[Link](https://docs.docker.com/engine/install/)
    * Tener instalado Docker Compose [Link](https://docs.docker.com/compose/install/)
* Para ejecutar el proyecto(**Primera Vez**)
    * docker-compose up. **OBS**: La primera vez llevará un tiempo iniciar el proyecto, ya que las imágenes se descargarán del Docker Hub
* Iniciar el proyecto
    * docker-compose start
* Parar el proyecto
    * docker-compose stop
* Remover los Contenedores
    * docker-compose rm

## Recursos
* URL base: seuIP:8000
* Dados de Entrada no Formulário

 * GET /empleado
 
 ```json
 {
    "empleados": [
        {
            "_id": "5ededcffc6902f29281bb09f",
            "nombre": "Pedro",
            "apellido": "Perez",
            "direccion": "direccion",
            "telefono": "123456",
            "correo": "usario@correo.com",
            "__v": 0,
            "cargo": "Desarollador"
        },
        {
            "_id": "5ededd0d76c28943c8d7f5e6",
            "nombre": "Kervin",
            "apellido": "Miranda",
            "direccion": "direccion",
            "telefono": "123456",
            "correo": "usario@correo.com",
            "cargo": "Desarollador",
            "__v": 0
        }
    ]
}

```

 * POST /empleado
 
 ```json
{
    "_id": "5ededcffc6902f29281bb09f",
    "nombre": "Pedro",
    "apellido": "Perez",
    "direccion": "direccion",
    "telefono": "123456",
    "correo": "usario@correo.com",
    "__v": 0,
    "cargo": "Desarollador"
}

 ```
 * GET /empleado/:id

 ```json
 {
    "_id": "5ededd0d76c28943c8d7f5e6",
    "nombre": "Kervin",
    "apellido": "Miranda",
    "direccion": "direccion",
    "telefono": "123456",
    "correo": "usario@correo.com",
    "cargo": "Desarollador",
    "__v": 0
}

 ```
 * PUT /empleado/:id

 ```json
 {
    "_id": "5ededd0d76c28943c8d7f5e6",
    "nombre": "Kervin",
    "apellido": "Miranda",
    "direccion": "direccion",
    "telefono": "123456",
    "correo": "usario@correo.com",
    "cargo": "Desarollador",
    "__v": 0
}

 ```
 * DELETE /empleado/:id
 
 ```json
 {
   "message": "El empleado ha sido Eliminado"
 }
 ```