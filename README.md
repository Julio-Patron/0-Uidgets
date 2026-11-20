# 0-Uidgets · Criaturas 3D para Windows

Buggy, Lumilisk, Nimpu, Pyxol, Velkarion y Yuravax son seis compañeros de escritorio para Windows 10 y 11 de 64 bits. En la web puedes elegir una criatura, acariciarla, girarla y probar sus dos etapas. Las herramientas opcionales de IA se usan en la aplicación de Windows.

[Explorar el catálogo en español](https://zero-uidgets.vercel.app/?lang=es) · [Browse in English](https://zero-uidgets.vercel.app/?lang=en) · [Política de privacidad](https://zero-uidgets.vercel.app/privacy.html)

## Tiendas y descargas

Elige una criatura en el visor 3D o en la tarjeta **Individual**. **Ver en Microsoft Store** abre su ficha oficial. **Próximamente en Microsoft Store** indica que aún no hay una ficha confirmada para esa selección. Cada dúo y la colección completa tienen su propia disponibilidad. La tarjeta de cada producto también muestra sus tiendas alternativas cuando están disponibles.

Si compraste antes mediante el pago directo, abre **Compras anteriores** desde el navegador con el que pagaste o utiliza el enlace privado de tu pedido. [Acceder a mis descargas](https://zero-uidgets.vercel.app/order)

## Publicar la siguiente criatura

1. Abre la ficha pública del producto en Microsoft Store y comprueba el nombre de la criatura.
2. En [el catálogo](js/catalog-data.js), pega la URL de la ficha en `STORE_LINKS.species.<criatura>.microsoftStore`. Por ejemplo, para Lumilisk edita `STORE_LINKS.species.lumilisk.microsoftStore`.
3. Publica el cambio. El visor y la tarjeta individual usan ese mismo campo en ambos idiomas. Déjalo vacío mientras la ficha esté pendiente.

Las fichas de los paquetes se configuran en `STORE_LINKS.bundles`, bajo `playfulDuo`, `dragonDuo`, `dreamyDuo` o `fullSquad`. Los enlaces de itch.io y Gumroad se editan en sus propios campos.

## Comprobar la web

Con Node.js 24 o posterior, ejecuta desde la raíz del repositorio.

```sh
npm --prefix commerce ci --ignore-scripts
npm run test:commerce
npm run prepare:site
npm start
```

Abre [la vista local](http://127.0.0.1:8091). Puedes seleccionar idioma y criatura con `?lang=en&species=nimpu`.

Vercel usa `commerce/` como raíz del proyecto. La [preparación del sitio](commerce/scripts/prepare-site.mjs) copia únicamente los archivos públicos del catálogo a `commerce/public/`. Las funciones de [compras anteriores](commerce/README.md) se ejecutan en el servidor.

Este repositorio contiene los archivos redistribuibles de la web y lo necesario para compilarla y comprobarla. Los instaladores, los pedidos, las credenciales y el material de trabajo local se mantienen fuera de Git.
