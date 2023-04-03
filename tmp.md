### Conceptos Generales

* MPA (Multi-Page-Application) es una arquitectura web que consta de la entrega de múltiples páginas HTML procesadas desde el servidor.

* SPA (Single-Page-Application) es una arquitectura web que consta en el procesamiento de las solicitudes desde el cliente.

* En las MPA, la mayor parte del contenido es procesado desde servidor. En los SPA, la mayor parte del contenido se representa localmente mediante la ejecución de JavaScript en el navegador. Fuese el caso, en ambos se tiene un impacto en el comportamiento del sitio, rendimiento y SEO.

### ¿Qué es Astro?

Astro es un framework MPA, como Drupal o WordPress, donde la principal diferencia es el lenguaje con el que se desarrolla y procesa la información. Adicionalmente, en cuanto a la XD (Experience-Development) se parece al de muchos Frameworks de aplicaciones como Next de React o Nuxt de Vue.

### Entorno de trabajo y estructura en Astro

```bash
npm create astro@latest -- --template portfolio project-name
```

### Configuración de Tailwind CSS

```bash
npx astro add tailwind
```

Con eso, Astro se encarga de toda la instalación y configuración, incluyendo de que ya no necesitas crear el archivo base.css, pues la integración de Astro automáticamente lo inyecta en cada una de las páginas de nuestro proyecto, por lo que puedes utilizar clases de tailwind inmediatamente.

### GitHub, VSCode, Prettier, Astro config

```bash
npm install --save-dev prettier prettier-plugin-astro
```

```js
module.exports = {
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    useTabs: true,
    plugins: [require('prettier-plugin-astro')],
    overrides: [
        {
            files: '**/*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
```

### Páginas en Astro

#### Tipos de página compatibles

Astro es compatible con los siguientes tipos de archivos en el directorio `src/pages/`:

* `.astro`
* `.md`
* `.mdx` (con la integración de MDX instalada)
* `.html [.js/.ts]` (como endpoints)

Astro aprovecha una estrategia de enrutamiento llamada **enrutamiento basado en archivos**. Cada archivo `.astro` en la carpeta `src/pages` se convierte en una página o un endpoint en tu proyecto de acuerdo a su ruta.

### MDX

```bash
npx astro add mdx
```

### Creando template de nuestra página de entrada del blog

API de Fake Images: https://api.lorem.space/image/fashion?w=640&h=480&r=3027

### Componentes en React: header

```bash
npx astro add react
```

Con este comando, Astro instalará y configurará automáticamente React y todas sus dependencias, también se encargará de modificar los archivos de configuración automáticamente.

### Componentes en Vue: footer

```bash
npx astro add vue
```

### Componentes en Svelte: redes sociales

```bash
npx astro add svelte
```

### Patrones de diseño: Astro Islands

El término `Astro Island` se refiere a un componente de `UI interactivo` en una página HTML `predominantemente estática`. Pueden existir varias islas en una página, y una isla siempre se `renderiza` en forma `aislada`. Piensa en ellos como islas en un mar de HTML estático y no interactivo.

#### Directivas del cliente

De forma predeterminada, un componente de framework no está hidratado en el cliente. Si no se proporciona la directiva `client:*`, tu HTML se representa en la página sin JavaScript.

Estos son los valores que puede tener la directiva client:

* `client:load`: Cargue e hidrate el JavaScript del componente inmediatamente al cargar la página.

* `client:idle`: Cargue e hidrate el componente JavaScript una vez que la página haya terminado con su carga inicial

* `client:visible`: Cargue e hidrate el JavaScript del componente una vez que haya ingresado al viewport del usuario. Esto utiliza un IntersectionObserver internamente para realizar un seguimiento de la visibilidad.

* `client:media`: client:media={string} carga e hidrata el componente JavaScript una vez que se cumple una determinada media query de CSS.

* `client:only`: ¡Debes pasar el framework correcto al componente! Debido a que Astro no ejecuta el componente durante su compilación/en el servidor, Astro no sabe qué framework usa el componente a menos que se lo indiques explícitamente.

```js
<SomeReactComponent client:only="react" />
<SomePreactComponent client:only="preact" />
<SomeSvelteComponent client:only="svelte" />
<SomeVueComponent client:only="vue" />
<SomeSolidComponent client:only="solid-js" />
```

### Integraciones SEO, RSS, Sitemap

template de `<head>` para el SEO: https://gist.github.com/gndx/fae954a6b2afdc07afe5441fba234801/

```bash
npm install @astrojs/rss
npx astro add sitemap
```

Generador de íconos para el SEO: https://en.rakko.tools/tools/69/

Finalmente:

```bash
npm run build
```
