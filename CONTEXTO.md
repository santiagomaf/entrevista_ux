# Contexto: Revisión Heurística del Prototipo "miUANDES" (Banner)

## Sobre el proyecto

Este es un proyecto de UX Design (curso universitario, Universidad de los Andes, Chile) que rediseña el **Banner**, la plataforma académica/administrativa que usan los estudiantes para inscribir ramos, ver notas, solicitar certificados, gestionar becas/CAE y comunicarse con la facultad.

Estamos en la **Entrega 4 (etapa final del proyecto)**. El foco de esta etapa es:
1. Refinar los wireframes/prototipo actual aplicando heurísticas de Nielsen y principios de Krug.
2. Hacer testing de usabilidad con usuarios reales.
3. Entregar un diseño final + un componente de IA/Data + un Customer Journey Map.

**Lo que necesito ahora**: que revises el código HTML del prototipo y me señales, heurística por heurística, qué problemas concretos tiene la implementación (no solo el diseño visual, sino también estructura, accesibilidad, feedback de interacción, responsividad), para poder corregirlos antes del testing con usuarios.

## Problemas ya identificados en la investigación (Entregas 1 y 2)

Estos son los pain points reales que reportaron los estudiantes entrevistados — usa esto como vara de comparación, no evalúes en el vacío:

- **Crashes en momentos críticos** (ej. inscripción de ramos, cierre de notas) → genera desconfianza.
- **Dificultad para encontrar información**: los estudiantes no saben dónde está cada función (ej. cómo postular a ser ayudante, dónde ver el avance de malla).
- **No hay diseño responsive**: la mayoría usa el Banner desde el celular y no funciona bien ahí.
- **UI poco clara y anticuada**: problemas con iconos confusos, organización de la información, estética poco agradable.
- **Falta de feedback**: los usuarios completan procesos (ej. subir una solicitud) y no saben si realmente se guardó o envió correctamente — esto generó errores graves en la vida real (ej. una alumna no apareció en una lista porque su solicitud nunca se registró y nadie le avisó).
- **Navegación poco intuitiva**: las opciones no guían al usuario, cuesta entender qué significa cada sección.

User Jobs principales que el diseño debe resolver:
1. Revisar información académica (notas, GPA, ranking, avance curricular) de forma rápida y clara.
2. Completar trámites/procesos de forma simple, segura y con confirmación clara.
3. Organizar la rutina académica (horarios, salas) de forma rápida y confiable.

## Tarea para Claude Code

Revisa todos los archivos HTML/CSS/JS del prototipo y evalúa cada pantalla contra las **10 heurísticas de usabilidad de Nielsen** y los **principios de Krug** ("Don't Make Me Think"). Para cada problema encontrado, indica:

- **Heurística o principio violado**
- **Dónde está** (archivo, elemento o pantalla específica)
- **Severidad** (cosmético / menor / mayor / catastrófico — usando la escala de severidad de Nielsen)
- **Sugerencia concreta de corrección** (a nivel de HTML/CSS, no solo conceptual)

Prioriza especialmente los problemas que se conectan directamente con los pain points reales de arriba (feedback de procesos, navegación, responsividad mobile, claridad de la información).

### Las 10 heurísticas de Nielsen (1994/2020)

1. **Visibilidad del estado del sistema**: el sistema debe informar siempre qué está pasando, con feedback apropiado en un tiempo razonable (ej. ¿hay confirmación visual al enviar un formulario? ¿loading states?).
2. **Coincidencia entre el sistema y el mundo real**: usar lenguaje, conceptos y convenciones familiares para el usuario, no jerga técnica o interna de la universidad sin explicación.
3. **Control y libertad del usuario**: los usuarios deben poder deshacer acciones o salir fácilmente de un estado no deseado ("salida de emergencia"), sin tener que pasar por un proceso extendido.
4. **Consistencia y estándares**: no hacer que el usuario se pregunte si distintas palabras, situaciones o acciones significan lo mismo; seguir convenciones de la plataforma/web.
5. **Prevención de errores**: mejor que buenos mensajes de error es un diseño que previene que el problema ocurra (confirmaciones antes de acciones críticas, validación de formularios en tiempo real).
6. **Reconocer en lugar de recordar**: minimizar la carga de memoria del usuario, haciendo visibles las opciones, acciones e información necesaria.
7. **Flexibilidad y eficiencia de uso**: aceleradores para usuarios expertos (ej. Sebastián, que quiere hacer todo rápido) sin afectar a usuarios novatos.
8. **Diseño estético y minimalista**: las pantallas no deben contener información irrelevante o que se usa raramente; cada elemento extra compite con los relevantes.
9. **Ayudar a reconocer, diagnosticar y recuperarse de errores**: mensajes de error en lenguaje claro (no códigos), que indiquen el problema exacto y sugieran una solución.
10. **Ayuda y documentación**: aunque lo ideal es que el sistema se use sin documentación, debe ser fácil de buscar, enfocada en la tarea del usuario y con pasos concretos.

### Principios clave de Krug a aplicar también

- **"Don't make me think"**: cada pantalla debe ser autoevidente; el usuario no debería tener que detenerse a interpretar qué hacer.
- **Que no importe cuántos clics, sino cuán fáciles son de tomar**: revisar si los pasos requieren decisiones difíciles, no solo contar clics.
- **Eliminar palabras innecesarias**: revisar textos, instrucciones y etiquetas de botones — ¿son lo más cortos y claros posible?
- **Convenciones de navegación visibles**: jerarquía visual clara, breadcrumbs o indicadores de "dónde estoy", botones de acción que se distinguen claramente de elementos decorativos.

## Formato de salida esperado

Una lista organizada por pantalla/archivo, con los hallazgos estructurados como se indicó arriba (heurística, ubicación, severidad, sugerencia). Si detectas patrones que se repiten en varias pantallas (ej. falta de feedback en todos los formularios), agrúpalos en un hallazgo general en lugar de repetirlo por cada pantalla.