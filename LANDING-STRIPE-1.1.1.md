# Landing y compras de 0-Uidgets · 1.1.1

Actualizado el 18 de noviembre de 2026. **Preparación local y catálogo de Stripe completados; venta directa y despliegue pendientes.** No se ha publicado, hecho push ni recompilado ningún producto.

## Decisiones confirmadas

- Usar la cuenta Stripe real **SES-Rerank** (`acct_1ULGj6LchocTb6aT`).
- Entregar automáticamente acceso a descargas privadas tras verificar el pago.
- Precios finales previstos: **US$14.99** por criatura, **US$26.99** por dúo y **US$59.99** por colección; pago único y ambas etapas incluidas.
- Mantener la categoría fiscal existente «Software descargable para uso personal» (`txcd_10202000`), recuperada de Stripe y confirmada por el usuario. [Catálogo fiscal oficial](https://docs.stripe.com/tax/tax-codes).
- El usuario indicó que **no está dado de alta fiscalmente en ningún país**. Stripe Tax está activo con México como país del negocio, pero devuelve cero registros. Se preparó `tax_behavior: inclusive` en los precios, sin añadir registros ni afirmar IVA operativo. La landing dice «precio final» y mantiene la compra directa desactivada. [Comportamiento fiscal de precios](https://docs.stripe.com/tax/products-prices-tax-codes-tax-behavior).
- Usar **Vercel Pro**, cuenta confirmada `admin@lexcorporativo.com.mx`, equipo `admin-25337337` (`team_bOqliEJyhhWjbWBt7ZrbbYd4`). El correo inicialmente escrito sin `.mx` fue aclarado por el usuario.
- Microsoft Store: seis nombres reservados, sólo Buggy cargado, **sin Submit** según el usuario. La validación real de EXE/APPX en VM sigue aplazada.

## Resultado de la landing

La rama local `commerce/stripe-1.1.1` parte de `visual/remodeled-creatures-1.1.1` (`5650c79`). La carpeta de trabajo principal es `C:/Users/jpatr/Documents/widgets/zero-ui-bots-landing`: tanto la landing como `commerce/` y este informe pertenecen a ese repositorio. La copia de trabajo anterior se conserva como respaldo local separado en `.qa/stripe-1.1.1-site-worktree/`, en estado detached y sin publicar.

- Los cinco modelos remodelados y Buggy son los únicos diseños mostrados. Los seis bundles coinciden byte a byte con la entrega pública autorizada; Buggy no fue editado.
- Catálogo, nombres de archivo, tamaños y SHA-256 actualizados a 1.1.1. Los 18 paquetes originales siguen intactos.
- Imágenes nuevas capturadas del visor web actual en `assets/creatures/`. No se presentan como capturas de una instalación Windows. La grabación anterior ya no se carga en la landing ni en las tarjetas sociales; queda archivada en el repositorio de origen.
- Precios aprobados visibles en EN/ES. Eliminado el precio tachado anterior. Se aclara que itch.io y Gumroad tienen sus propios precios; no se modificaron esas tiendas.
- Compra directa preparada mediante formularios con SKU; permanece desactivada hasta configurar y probar el servidor. Microsoft Store conserva su estado próximo lanzamiento.
- `privacy.html`, el host del visor, `stage.html`, `css/stage.css` y los seis bundles fueron conservados byte a byte. La copia inicial de Git había convertido saltos de línea; se restituyeron los bytes originales tras comprobar que el contenido era idéntico.
- Este repositorio contiene la landing, los bundles autorizados, recursos web y el servidor de compras en `commerce/`. No incluye EXE, APPX, instaladores, `.ts`, `electron/`, claves ni código de la aplicación de escritorio. Los módulos del servidor se excluyen de `commerce/public/`, la carpeta estática servida al navegador.

Vercel es adecuado para alojar la tienda y las funciones de pago. GitHub puede seguir guardando el código: GitHub Pages restringe sitios orientados principalmente a transacciones comerciales. Blob privado se cobra por uso; tener Pro no implica transferencia ilimitada. [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [Vercel Blob](https://vercel.com/docs/vercel-blob/usage-and-pricing).

## Catálogo real de Stripe

Se crearon y volvieron a leer **10 productos inactivos y 10 precios** de pago único, USD e impuestos incluidos en el importe cuando corresponda. No se crearon enlaces de pago, sesiones Checkout, cobros, clientes ni suscripciones.

| Oferta | Productos | Precio por compra |
|---|---:|---:|
| Buggy, Pyxol, Velkarion, Nimpu, Lumilisk, Yuravax | 6 individuales | US$14.99 |
| Buggy + Pyxol; Velkarion + Lumilisk; Yuravax + Nimpu | 3 dúos | US$26.99 |
| Colección de las seis | 1 colección | US$59.99 |

Los identificadores exactos están en [commerce/catalog.json](commerce/catalog.json). La evidencia de creación y lectura está en [stripe-catalog-evidence.json](.qa/stripe-1.1.1/stripe-catalog-evidence.json).

## Servidor privado preparado

[commerce/](commerce/) contiene un proyecto independiente con lockfile propio: Stripe 23.1.0 y Vercel Blob 2.9.0. Las dependencias, IA, almacenamiento local y permisos de los productos no se modificaron.

El servidor verifica firma del webhook y estado del pago, genera un derecho de descarga idempotente, valida importe/moneda/producto/versión, bloquea pagos pendientes, reembolsados o disputados, y emite enlaces privados de archivo con duración de cinco minutos. La recuperación funciona con cookie de 30 días o enlace privado guardado. No se implementó entrega por correo. Las particularidades y configuración están en [commerce/README.md](commerce/README.md).

La carpeta [commerce/public/](commerce/public/) es una copia permitida de los archivos web para el futuro despliegue. Los EXE y ZIP permanecerán en Blob privado, separados del despliegue y del repositorio. Los scripts reciben una ruta externa explícita para leer los originales; no necesitan que exista un repositorio Widgets para preparar la web o arrancar el servidor. El script de subida está preparado y verificó los doce originales localmente; **no los ha subido**.

## Pruebas de esta revisión

| Prueba | Resultado | Alcance |
|---|---|---|
| Visor actual: 6 criaturas × 2 etapas × 4 tamaños | **48/48** | Navegador con perfil exclusivo de pruebas |
| Cambio repetido de criatura y destrucción | **Máximo 1 contexto; 0 al terminar** | Sin errores de consola |
| EN/ES, precios, imágenes, escritorio y móvil de 390 px | **Correcto** | Sin imágenes rotas ni desbordamiento horizontal |
| Pago, firma, permisos de descarga, recuperación y rutas | **18/18** | Pruebas locales con servicios controlados; firma real del SDK |
| Integridad y límites de publicación | **69 comprobaciones** | 18 paquetes originales, metadatos, archivos protegidos y ausencia de credenciales/ejecutables públicos |
| Pago y descarga contra Stripe/Blob reales | **Pendiente** | No hay sandbox, secretos ni almacenamiento provisionado |
| Autoextraíbles reales e instalación APPX | **Pendiente por decisión del usuario** | No se atribuyen las pruebas web a instalaciones Windows |

Evidencias: [resultados del visor](.qa/stripe-1.1.1/qa/results.json), [landing EN/ES y móvil](.qa/stripe-1.1.1/qa/storefront.json), [18 pruebas del servidor](.qa/stripe-1.1.1/checkout-tests.log), [integridad](.qa/stripe-1.1.1/delivery.json), [archivos de descarga](.qa/stripe-1.1.1/storage-validation.json).

Vista previa: [escritorio](.qa/stripe-1.1.1/qa/desktop.png), [móvil](.qa/stripe-1.1.1/qa/mobile.png), [las seis criaturas actuales](assets/creatures/collection-1.1.1.png).

## Bloqueo y pendientes concretos

1. **Acceso de creación en Vercel.** La conexión reconoce la cuenta y el equipo Pro, pero `POST /v11/projects` para `zero-uidgets` devolvió **403: no tienes permiso para crear el proyecto**, también después de que el usuario confirmara la conexión. Sólo aparece `lex-laboral`. No existe CLI autenticada ni una vinculación `.vercel/project.json` en la carpeta indicada. No se modificó Lex Laboral. Hace falta habilitar creación para la conexión o proporcionar el proyecto `zero-uidgets` en ese equipo.
2. **Infraestructura privada.** Provisionar Blob privado, vincularlo al nuevo proyecto, subir los doce archivos y volver a verificar sus hashes desde almacenamiento. El código preparado efectúa esa comprobación.
3. **Sandbox y secretos.** Conectar un sandbox de Stripe, configurar sus Price IDs y guardar una clave restringida y el secreto del webhook como variables sensibles en Vercel. No pegar secretos en el chat. Registrar y probar el webhook, pago diferido, cancelación, recuperación, reembolso y caducidad de descargas.
4. **Fiscalidad y datos de venta.** Resolver el alta/tratamiento fiscal y comprobarlo antes de activar `TAX_READY`. Los importes aprobados permiten conservar el total cuando proceda incluir impuestos; no son una declaración de cumplimiento fiscal. Completar las condiciones comerciales del vendedor.
5. **Activación y publicación.** Después de verificar el flujo real, habilitar productos y botones, fijar el origen definitivo y publicar sólo con autorización. Hasta entonces `COMMERCE_ENABLED=false`, `TAX_READY=false` y `checkoutOrigin` vacío.

La entrega de escritorio 1.1.1 y su auditoría conservan sus propios límites en [ENTREGA-1.1.1.md](../Widgets/ENTREGA-1.1.1.md). Esta revisión no contiene una nueva compilación ni una nueva prueba de instalación.

## Corrección de ubicación

Por indicación del usuario, todo el trabajo de landing/Stripe se trasladó a este repositorio: fuente web en la raíz, servidor en `commerce/`, informe en la raíz y evidencias en `.qa/stripe-1.1.1/` (ignoradas por Git). Widgets conserva únicamente la aplicación, sus binarios y la documentación de distribución. No se cambiaron recursos de Stripe/Vercel ni se publicó nada durante el traslado. Las rutas absolutas de los JSON históricos identifican dónde se hicieron aquellas pruebas; no se reescriben como si se hubieran ejecutado de nuevo.

### Verificacion posterior al traslado

El 18-11-2026 se repitieron desde `zero-ui-bots-landing` las **18 pruebas del servidor (18 correctas, 0 fallos)**, la preparacion de **44 recursos publicos mas el ayudante de acceso**, y la comprobacion SHA-256 de los **12 archivos de descarga externos**, sin subirlos. Los 50 archivos web y 27 archivos fuente del servidor conservaron sus hashes durante el traslado. Las seis criaturas, `privacy.html` y los archivos del visor protegidos coinciden byte por byte con la base Git.

La revision HTTP local responde correctamente para la landing y sus recursos; los archivos del servidor y la documentacion no se sirven. `/health` y `/checkout` mantienen `503 store_not_configured`: las ventas siguen cerradas. Vista local: `http://127.0.0.1:8091`.

Evidencias nuevas: [traslado y hashes de origen](.qa/stripe-1.1.1/relocation.json), [validacion posterior](.qa/stripe-1.1.1/relocation-validation.json), [pruebas del servidor](.qa/stripe-1.1.1/relocation-checkout-tests.log) y [manifiesto SHA-256 posterior](.qa/stripe-1.1.1/RELOCATION-SHA256SUMS.txt). Las 48 combinaciones visuales y las 69 comprobaciones de integridad anteriores siguen siendo evidencia historica; no se repitieron ni se atribuyen a instalaciones de EXE/APPX. `EVIDENCE-SHA256SUMS.txt` conserva el manifiesto anterior al traslado y sus rutas originales.
