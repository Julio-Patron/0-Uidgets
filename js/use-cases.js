// Editorial examples, not captured model output or live AI responses.
// Replace these illustrations with verified Windows recordings when available.
export const USE_CASE_ORDER = ['screen', 'document', 'clipboard'];
export const USE_CASES = {
  en: {
    screen: {
      title: 'An error. A place to start.',
      sourceLabel: 'An error on your screen',
      source: 'Could not open report.pdf\nAccess denied.',
      gesture: 'Select the area · Alt + Shift + S',
      request: '“What does this mean, and what should I check?”',
      result: 'The file may be in use, or your Windows user may not have access. Check whether it is open in another app and review its permissions.',
      outcome: 'Understand the message and identify what to check next.',
    },
    document: {
      title: "Two invoices in one Excel workbook",
      sourceLabel: "Store build 1.1.3 · sample folder",
      source: "Invoices/April/A-104.pdf · North Paper · USD 125.00\nInvoices/May/B-208.pdf · Cedar Ink · USD 74.50",
      gesture: "Drop the folder onto any bot",
      request: "“Extract the supplier, invoice number, currency and total.”",
      result: "The comparison sheet lists North Paper (A-104, USD 125.00) and Cedar Ink (B-208, USD 74.50). Sort the Total column to compare amounts.",
      outcome: "Save the .xlsx workbook. The other sheets contain document summaries and source references.",
    },
    clipboard: {
      title: 'A difficult message. A clearer tone.',
      sourceLabel: 'A draft on your clipboard',
      source: 'You still haven’t sent the file.\nI need it now or I can’t continue.',
      gesture: 'Copy the text · Shift + click the bot',
      request: '“Keep the request, but make the tone more diplomatic.”',
      result: 'Could you send me the file today? I need it to continue with the next step. Thank you.',
      outcome: 'Get a version you can review and paste into your message.',
    },
  },
  es: {
    screen: {
      title: 'Un error. Un punto de partida.',
      sourceLabel: 'Un error en tu pantalla',
      source: 'No se pudo abrir informe.pdf\nAcceso denegado.',
      gesture: 'Selecciona la zona · Alt + Shift + S',
      request: '«¿Qué significa y qué debería revisar?»',
      result: 'El archivo podría estar en uso o tu usuario de Windows podría no tener acceso. Comprueba si está abierto en otra aplicación y revisa sus permisos.',
      outcome: 'Entiende el mensaje e identifica qué revisar después.',
    },
    document: {
      title: "Dos facturas en un libro de Excel",
      sourceLabel: "Compilación Store 1.1.3 · carpeta de ejemplo",
      source: "Facturas/Abril/A-104.pdf · Papel Norte · USD 125.00\nFacturas/Mayo/B-208.pdf · Tinta Cedro · USD 74.50",
      gesture: "Suelta la carpeta sobre cualquier bot",
      request: "«Extrae proveedor, folio, moneda y total».",
      result: "La hoja Comparativo muestra Papel Norte (A-104, USD 125.00) y Tinta Cedro (B-208, USD 74.50). Ordena la columna Total para comparar los importes.",
      outcome: "Pulsa Guardar Excel (.xlsx). Documentos contiene los resúmenes y Datos conserva las referencias al archivo de origen.",
    },
    clipboard: {
      title: 'Un mensaje difícil. Un tono más claro.',
      sourceLabel: 'Un borrador en tu portapapeles',
      source: 'Todavía no me mandas el archivo.\nLo necesito ya o no puedo seguir.',
      gesture: 'Copia el texto · Shift + clic en el bot',
      request: '«Mantén la petición, pero dale un tono más diplomático».',
      result: '¿Podrías enviarme el archivo hoy? Lo necesito para avanzar con el siguiente paso. Gracias.',
      outcome: 'Obtén una versión que puedes revisar y pegar en tu mensaje.',
    },
  },
};
