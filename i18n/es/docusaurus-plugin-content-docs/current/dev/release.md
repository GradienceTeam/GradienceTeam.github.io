# Proceso de lanzamiento

## Antes de una versión

### Una semana antes de la publicación
- [ ] Anunciar la próxima publicación mediante la creación de un nuevo número una semana antes de la publicación.
- [ ] Pedir a los traductores que traduzcan nuevas cadenas.
- [ ] En el número, preparar las notas de la publicación :
  - [ ] La primera sección sería un resumen de grandes cambios.
  - [ ] La segunda sección debería listar las nuevas dependencias, incluyendo las dependencias de python y la razón por la que fueron añadidas.
  - [ ] La tercera sección sería la lista de contribuciones.

### 3 días antes de la publicación
- [ ] Desconectarse de las notas de publicación (o al menos de la primera sección).
- [ ] Actualizar el número de versión del mesón.
- [ ] Añadir el contenido de la primera sección de las notas de la versión a la AppData.
- [ ] Crear una nueva rama para el lanzamiento con el nombre siendo el número de lanzamiento y congelar nueva característica, sólo combinar en correcciones de errores y actualizaciones de traducción.
- [ ] Crear una versión de prueba de flathub (creando una pull request en el repositorio de flathub) haciendo bumping a la etiqueta de lanzamiento, y pidiéndole a FlaHub buildbot que la construya).
- [ ] Pedir a los colaboradores que prueben la compilación. Cualquier error identificado debería detener la actualización hasta que se corrija.

## Haciendo la versión
- [ ] Etiqueta el último commit en la rama de lanzamiento con el número de versión.
- [ ] Crear una nueva versión de GitHub usando las notas de publicación aprobadas.

## Después de la versión
- [ ] Actualice el paquete flathub golpeando la etiqueta de liberación.
- [ ] Notificar a los empaquetadores.
- [ ] Escriba un anuncio de DWIG.
