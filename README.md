# Katas

Repositorio específico para katas, incluyendo asimismo submódulos de templates (boilerplates) para facilitar la creación de nuevas katas.

Las plantillas para las katas son las siguientes:
- [Typescript template](https://github.com/lean-mind/typescript-boilerplate) → lean-mind/typescript-boilerplate
- [Java template](https://github.com/lean-mind/boilerplate-java) → lean-mind/boilerplate-java
- [Kotlin template](https://github.com/lean-mind/kotlin-katas-template) → lean-mind/kotlin-katas-template
- [Flutter template](https://github.com/lean-mind/boilerplate-flutter) → lean-mind/boilerplate-flutter

Las podrás encontrar todas dentro de la carpeta `/.templates`

Hay más disponibles entre las [plantillas de Lean Mind](https://github.com/orgs/lean-mind/repositories?type=template)

---

## Procedimientos

### Para descargar las templates

- Si aún no has descargado este proyecto puedes hacerlo añadiendo `--recursive` en el comando de clonación
  - Por ejemplo `git clone --recursive git@github.com:mreysei/katas.git`
- Si ya lo has descargado sigue estos pasos:
  1. Lanzar el comando `git submodule init` para enlazar los sub módulos
  2. Lanza el comando `git submodule update` para traertelos actualizados

### Para hacer una nueva kata
###### \* Antes debes hacer los pasos del procedimiento [para descargar las templates](#Para-descargar-las-templates)

1. Actualiza las templates
   - Si quieres actualizar todas puedes lanzar el comando `git submodule foreach git pull`
   - Si sólo quieres una en concreto, simplemente hace un `git pull` en la template deseada
2. Dirígete a la carpeta `/.templates` y elige la que más te guste
3. Cópiala recursivamente en tu kata deseada, por ejemplo `/word-wrap/typescript`
4. Elimina el directorio `.git` que hay en la kata para poder utilizar el control de versiones
5. Enjoy! 🎉

### Para añadir una nueva template
1. Busca la nueva template (hay varias disponibles entre los [repositorios de Lean Mind](https://github.com/orgs/lean-mind/repositories?type=template))
2. Copia la url de clonación
   - Por ejemplo `git@github.com:lean-mind/typescript-boilerplate.git`
3. Entra en la carpeta `/.templates`
4. Lanza el comando para añadir un nuevo módulo `git submodule add <url> <name>`
   - Por ejemplo `git submodule add git@github.com:lean-mind/typescript typescript`
5. Enjoy! 🎉

