# Leccion 06: CSS Accesible & Contraste de Colores

## Introducción

El objeto de la lección es el siguiente:

- Entender porque los tonos claros pueden ser un problema de accesibilidad.
- Conocer los estandares de colores establecidos por la WCAG.
- Definir una guia de colores que cumplan con los estandares.


El contraste entre colores es un factor muy importante para el diseño e implementación de sitios web accesibles. El color de fondo (background) y el color de texto (foreground) tienen que contrastar lo suficiente para que los usuarios con visión reducida tenga una buena experiencia y el contenido sea legible.

Para garantizar un contraste adecuado la WCAG recomienda esta configuración de contraste para definir los colores de tu sitio:

| **Contenido** | **Proporción minima (AA)** | **Proporción mejorada(AAA)** |
|:-------------:|:---------------------:|:-----------------------:|
| Texto normal  | 4.5:1                 | 7:1                     |
| Texto grande  | 3:1                   | 4.5:1                   |


**Como se interpreta la proporción de contraste?**

La proporción de contraste es una medida con la que la WCAG establece la diferencia de brillo o iluminación entre dos colores, va desde 1:1 (blanco sobre blanco), hasta 21:1 (negro sobre blanco). Como se busca una relación de alto contraste, entre mas grande sea el numero de la izquierda y menor sea el de la derecha, mayor será el contraste.

## Desafío

1. Utiliza el inspector para encontrar los problemas de contraste de este sitio.
2. Diseña tu propio set de colores, trabaja en el archivo `06.css`.
3. Utiliza contrast checkers para definir los colores ideales de tu sitio.
4. Analiza nuevamente la configuración de colores de tu sitio y garantiza que el nivel de aceptación sea minimamente `AA`.

## Crédito Extra 01

Vamos a habilitar el tema oscuro de nuestro blog, verifica que el set de colores que escogiste cumpla con los specs del contraste AA.

Si no lo cumple define un nuevo set de colores exclusivamente para el modo oscuro. 🥷
