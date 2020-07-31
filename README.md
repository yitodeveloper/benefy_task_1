# To-do list 

Un simple to-do list realizado como tarea para la postulación del puesto de Fullstack Node.

Caracteristicas incluidas:
- Estructura del proyecto escalable.
- Carga inicial automática de tareas (demo).
- Endpoint con listado de tareas.

# Intalación y uso
Clona el proyecto e instala las dependencias.

```
    npm install
```

Carga el modelo en tu servidor MySQL

```sql
CREATE DATABASE `todolist`;

CREATE TABLE `todolist`.`task`  (
  `task_id` int(0) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp(0) NULL,
  `text` varchar(255) NULL,
  `complete` int(0) NULL,
  PRIMARY KEY (`task_id`)
);

```
Accede a la configuración del proyecto y ajusta los datos de conexión.

```js
module.exports = {
    BASE_PATH: '/api/',
    MYSQL_HOST: 'localhost',
    MYSQL_USER: 'usuario',
    MYSQL_PASSWORD: 'contraseña',
    MYSQL_DATABASE: 'todolist',
    MYSQL_DEBUG: false,
}
```
Corre el proyecto
```
    npm start
```

## Enpoints

| Endpoint | Method | Descripción | Parametros |
| -------- | -------| ----------- | ---------- |
| /api/task | GET | Obtiene un listado completo de las tareas creadas en la plataforma | |

# Gracias

Gracias por la oportunidad de hacer este proyecto, fue entretenido construirlo.