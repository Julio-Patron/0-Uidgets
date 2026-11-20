# Acceso a compras anteriores

Las compras nuevas se realizan en las tiendas enlazadas desde [el catálogo](https://zero-uidgets.vercel.app/#pricing). Las funciones de esta carpeta atienden a quienes adquirieron una descarga por el antiguo pago directo.

| Ruta | Función |
| --- | --- |
| `/order` | Muestra las descargas de un pedido verificado en el navegador del comprador. |
| `/access` y `/restore` | Restablecen el acceso a partir del enlace privado del pedido. |
| `/download` | Comprueba el pago y el archivo adquirido antes de emitir una URL temporal. |
| `/stripe/webhook` | Recibe notificaciones firmadas sobre pagos anteriores. |
| `/checkout` | Devuelve HTTP 410 con enlaces al catálogo y a las compras anteriores. |

La verificación de compras anteriores usa el catálogo histórico, Stripe y almacenamiento privado. Las credenciales se configuran en el entorno del servidor. La preparación de la web y las pruebas locales se pueden ejecutar sin credenciales de pago.

[Instrucciones para compilar y probar la web](../README.md#comprobar-la-web) · [Política de privacidad](https://zero-uidgets.vercel.app/privacy.html)
