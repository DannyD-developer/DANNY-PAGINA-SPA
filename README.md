# 🌟 Mario SPA - Personajes y Accesibilidad  

Este proyecto es una **Single Page Application (SPA)** desarrollada con **React** que presenta a los personajes del universo de Mario. El enfoque principal fue implementar **buenas prácticas de accesibilidad** siguiendo las pautas **WCAG 2.1** y la normativa local vigente.  

---

##  Propósito y Público Objetivo  

El propósito de esta SPA es:  
- Mostrar de manera clara y atractiva información sobre los personajes de Mario.  
- Servir como práctica en el desarrollo de **interfaces accesibles** y **responsivas** con React.  

Público objetivo:  
- Personas interesadas en la saga de Mario.  
- Usuarios que acceden desde diferentes dispositivos (computadores, móviles, tablets).  
- Personas con **diversidad funcional**, asegurando que la página sea **usable con teclado, lectores de pantalla y contraste adecuado**.  

---

##  Planificación y Análisis  

1. **Propósito:** SPA accesible sobre los personajes de Mario.  
2. **Accesibilidad:** Se aplicaron las pautas **WCAG 2.1**, como:  
   - Alternativas textuales para imágenes.  
   - Correcto orden de tabulación.  
   - Encabezados y roles semánticos.  
   - Compatibilidad con teclado y lectores de pantalla.  

---

##  Diseño Accesible  

- **Wireframes y prototipos:** pensados con navegación clara y simple.  
- **Contraste de colores:** asegurado para texto e interacciones.  
- **Tipografía legible:** tamaños adecuados para todo el contenido.  
- **Accesibilidad por teclado:** todos los elementos interactivos pueden usarse sin ratón.  

---

##  Desarrollo de la SPA  

- Framework usado: **React**.  
- Estructura con **HTML semántico** (uso de `section`, `h1`, `ul`, `li`).  
- **Navegación interna SPA** sin recargar la página.  
- Integración de imágenes desde la carpeta `public/images` con rutas relativas.  
- Despliegue en **GitHub Pages**:  
  (https://dannyd-developer.github.io/DANNY-PAGINA-SPA/)  

---

##  Implementación de características de accesibilidad  

- **Etiquetas ARIA:** aplicadas donde se requiere (`aria-labelledby`).  
- **Imágenes con alt:** todos los personajes incluyen texto alternativo descriptivo.  
- **Correcto orden de tabulación:** navegación fluida con teclado.  
- **Visibilidad de foco:** elementos interactivos muestran enfoque claro al seleccionarse.  
- **Estructura semántica:** encabezados, listas y roles correctos.  

---

##  Pruebas de accesibilidad  

Se realizaron:  
- **Pruebas automáticas:**  
  - Lighthouse (Chrome DevTools).  
  - axe DevTools.  
  - WAVE.  
- **Pruebas manuales:**  
  - Navegación con teclado (Tab, Enter, Espacio).  


Correcciones implementadas tras pruebas:  
- Ajuste de rutas de imágenes con `process.env.PUBLIC_URL`.  
- Inclusión de atributos `alt` en imágenes.  
- Roles semánticos correctos en secciones.  

---

##  Documentación  

- **Guía de usuario:**  
  - Navega por la SPA con teclado o mouse.  
  - Cada personaje tiene su imagen y descripción accesible.  
  - El foco se resalta al moverse entre elementos.  

- **Decisiones técnicas:**  
  - Se eligió React por su flexibilidad y facilidad en SPAs.  
  - Las imágenes se ubicaron en `public/images` para acceso directo.  
  - Se priorizó la accesibilidad siguiendo las pautas WCAG 2.1.  

---

##  Entrega  

- Proyecto desplegado en GitHub Pages.  
- Documentación completa con enfoque en accesibilidad.  
- SPA lista para ser usada por cualquier tipo de usuario.  

---

 **Desarrollado por:** Danny Diaz 

