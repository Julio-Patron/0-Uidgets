# Compras de 0-Uidgets

Servidor de compras de **zero-ui-bots-landing**, preparado para Vercel Pro. La landing de la raíz se copia a `commerce/public/` mediante una lista explícita de archivos permitidos. El código del servidor vive en `commerce/api/` y `commerce/lib/`; sólo se ejecutará en Functions y no se incluye en la carpeta pública servida al navegador. Las credenciales y los archivos vendidos quedan fuera de Git. Este proyecto no pertenece al repositorio Widgets.

Estado: **sin desplegar ni activar ventas**. La creación del proyecto en el equipo Pro conectado fue rechazada por Vercel con HTTP 403. No hay almacenamiento provisionado, secretos de servidor, webhook registrado ni prueba de pago de extremo a extremo.

## Flujo implementado

1. La landing envía por POST el SKU y el idioma a `/checkout`. Los diez SKU y sus importes provienen de `catalog.json`, nunca del precio enviado por el navegador.
2. Antes de crear Checkout, el servidor verifica la cuenta, la actividad del producto/precio, los registros fiscales activos y la presencia de cada archivo privado.
3. Stripe devuelve al comprador a `/order`. La confirmación y los webhooks firmados llaman al mismo procedimiento de entrega. Se exige pago confirmado, importe, moneda, Price ID, modo, versión y ausencia de reembolso/disputa. Un pago pendiente no libera archivos.
4. Un registro privado inmutable guarda el derecho de descarga sin nombre, correo, tarjeta ni dirección del comprador. La escritura condicional tolera webhooks repetidos y la llegada simultánea del comprador.
5. `/download` vuelve a comprobar pago, prueba de acceso y pertenencia del archivo a lo comprado antes de emitir una URL de Blob privada que caduca en cinco minutos. El EXE no atraviesa la Function ni aparece en el repositorio público.
6. Una cookie necesaria permite volver desde el mismo navegador durante 30 días. La página de compra entrega también un enlace privado con la credencial en el fragmento de URL, que no se envía en el Referer. Se restaura mediante POST. No se ha implementado entrega por correo ni cuentas de comprador; si se pierden enlace y cookie, la recuperación será asistida mediante la referencia de pago.

## Catálogo confirmado

Cuenta Stripe real autorizada: SES-Rerank (`acct_1ULGj6LchocTb6aT`). Se crearon diez productos inactivos y diez precios de pago único en USD, verificados mediante lectura de la API. `catalog.json` conserva sus identificadores.

| Oferta | Importe final previsto | Importe en centavos |
|---|---:|---:|
| Cada criatura | US$14.99 | 1499 |
| Cada uno de los tres dúos | US$26.99 | 2699 |
| Colección de seis | US$59.99 | 5999 |

Los Price tienen `tax_behavior: inclusive`: un impuesto aplicable saldría de ese total. **Esto no configura ni acredita el cobro de IVA.** El usuario confirmó no estar registrado fiscalmente en ningún país; Stripe devuelve cero registros. No se creó ninguno ni se alteraron los ajustes fiscales existentes. `TAX_READY=false` y `COMMERCE_ENABLED=false` mantienen cerrada la venta.

La categoría `txcd_10202000`, software descargable para uso personal, procede del catálogo oficial de Stripe y fue confirmada por el usuario. [Categorías fiscales de Stripe](https://docs.stripe.com/tax/tax-codes).

## Revisión local

Las dependencias de esta carpeta están fijadas en un lockfile independiente: Stripe 23.1.0 y Vercel Blob 2.9.0. No se modificó el lockfile del producto.

```powershell
cd commerce
npm ci --ignore-scripts
npm test
npm run prepare:site
npm start
```

El servidor de revisión sólo escucha en `127.0.0.1:8091`. Los botones directos quedan desactivados. El flujo real usa cookies `Secure` y un origen HTTPS fijo; no se deben debilitar esas condiciones para probar pagos por HTTP.

`node scripts/upload-release.mjs --release-dir '<ruta externa a dist-release>'` verifica los doce archivos originales sin subirlos. Añadir `--upload` los sube a un almacén privado autenticado y vuelve a leer cada objeto para verificar SHA-256 y tamaño. Los APPX originales de Microsoft Store no se suben a este canal. El script exige que los archivos vendidos permanezcan fuera del repositorio de la landing.

Para regenerar `files.json`, `node scripts/catalog-files.mjs --packages '<ruta externa a packages.json>'` lee explícitamente el manifiesto validado. La landing y el servidor arrancan sin necesitar una copia de Widgets. Las evidencias locales se guardan en `.qa/stripe-1.1.1/`, ignorado por Git; los JSON ya existentes conservan las rutas y fechas de las pruebas originales.

## Pendientes para habilitar

- Crear o proporcionar acceso al proyecto `zero-uidgets` en el equipo Pro `admin-25337337`, cuenta `admin@lexcorporativo.com.mx`. No utilizar el proyecto Lex Laboral.
- Crear y conectar un almacén Blob **private** en `iad1`; obtener acceso OIDC para el proyecto y comprobar los doce objetos mediante el script de subida. Costes según almacenamiento, operaciones y transferencia; Pro no implica descargas ilimitadas.
- Configurar el origen definitivo en `APP_ORIGIN`. La preparación local lo usa para canonical y metadatos, y sólo activa botones si ambas banderas de habilitación son verdaderas. La página existente `privacy.html` no se modifica.
- Conectar el sandbox de Stripe, crear allí los diez productos con los mismos productId del catálogo y configurar sus Price IDs mediante `STRIPE_PRICE_IDS_JSON`. Guardar claves restringidas y firma del webhook como variables **sensitive** en Vercel, nunca en Git ni en el chat. Dar a la clave sólo lectura de cuenta, Prices, Products, Stripe Tax y PaymentIntents/Charges, y lectura/escritura de Checkout Sessions; verificar los permisos con el sandbox.
- Registrar `/stripe/webhook` con `checkout.session.completed` y `checkout.session.async_payment_succeeded`. Los eventos ajenos a 0-Uidgets se ignoran. Probar firma, repetición, pago diferido, pago fallido, cancelación, cierre de pestaña, recuperación, reembolso, disputa y caducidad de enlaces usando servicios reales en sandbox.
- Resolver el alta y tratamiento fiscal con los datos del vendedor. No añadir registros por inferencia ni asumir que el 16 % se aplica a cualquier comprador. Verificar el cálculo fiscal antes de habilitar. Completar datos comerciales y condiciones de compra del vendedor.
- Configurar límites de solicitudes para los endpoints de compra/recuperación en Vercel y revisar el acceso público necesario del webhook sin retirar protección de las previsualizaciones.
- Tras validar, activar productos, preparar la landing con su origen y publicar únicamente con autorización. No se ha hecho ninguna compra o cobro de prueba en modo real.

Las pruebas locales usan respuestas controladas de Stripe/almacenamiento, la verificación real de firmas del SDK y las rutas del servidor con ventas cerradas. **No sustituyen una compra ni una descarga contra Stripe y Blob reales.** Tampoco acreditan ejecución de los EXE o instalación APPX: esas pruebas de 1.1.1 siguen pendientes en una VM.
