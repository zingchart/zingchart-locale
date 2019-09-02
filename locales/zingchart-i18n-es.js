(function(){
  var locale = {
    'rtl': false,
    'decimals-separator' : ',',
    'thousands-separator ': '.',
    'menu-reload' : 'Recargar',
    'menu-print' : 'Imprimir gráfico',
    'menu-viewaspng' : 'Mostrar como PNG',
    'menu-viewasjpg' : 'Mostrar como JPG',
    'menu-downloadpdf' : 'Descargar en PDF',
    'menu-downloadsvg' : 'Descargar en SVG',
    'menu-exportdata' : 'Exportar datos',
    'menu-zoomin' : 'Aumentar Zoom',
    'menu-zoomout' : 'Disminuir Zoom',
    'menu-viewall' : 'Visualizar todo',
    'menu-viewsource' : 'Mostrar fuente',
    'menu-bugreport' : 'Enviar reporte De error',
    'menu-switchto2d' : 'Cambiar a 2D',
    'menu-switchto3d' : 'Cambiar a 3D',
    'menu-showguide' : 'Mostrar guía',
    'menu-hideguide' : 'Ocultar guía',
    'menu-switchtolin' : 'Mostrar escala lineal',
    'menu-switchtolog' : 'Mostrar escala logarítmica',
    'menu-fullscreen' : 'Mostrar a pantalla completa',
    'menu-exitfullscreen' : 'Salir de pantalla completa',
    'menu-goback' : 'Volver atras',
    'menu-goforward' : 'Avanzar',
    'date-formats' : {
      'msecond' : '%d %M %Y<br>%g:%i:%s %A<br>%q ms',
      'second' : '%d %M %Y<br>%g:%i:%s %A',
      'minute' : '%d %M %Y<br>%g:%i %A',
      'hour' : '%d %M %Y<br>%g %A',
      'day' : '%d %M %Y',
      'month' : '%M %Y',
      'year' : '%Y'
    },
    'days-short' : ['do.', 'lu.', 'ma.', 'mi.', 'ju.', 'vi.', 'sa.'],
    'days-long' : [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado'
    ],
    'months-short' : [
      'en.',
      'febr.',
      'mzo.',
      'abr.',
      'my.',
      'jun.',
      'jul.',
      'agt.',
      'sept.',
      'oct.',
      'nov.',
      'dic.'
    ],
    'months-long' : [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'Agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ],
    'sync-wait' : 'Sincronizando...',
    'export-wait' : 'Exportando...',
    'progress-wait-long' : 'Cargando... Por Favor, espere... ',
    'progress-wait-short' : 'Espere...',
    'progress-wait-mini' : '...',
    'error-header' : 'Ha ocurrido un error',
    'error-message' : 'Mensaje de error:',
    'error-close' : 'Cerrar',
    'bugreport-header' : 'Enviar informe de error',
    'bugreport-senddata' : 'Enviar datos en JSON',
    'bugreport-sendcapture' : 'Enviar Captura de Gráfica',
    'bugreport-yourcomment' : 'Comentario:',
    'bugreport-jsondata' : 'Datos en JSON:',
    'bugreport-youremail' : 'Su Dirección de Correo Electrónico',
    'bugreport-infoemail' :
      'Si desea recibir un correo electrónico respecto a su informe de error',
    'bugreport-emailmandatory' :
      'Su dirección de correo electrónico es obligatoria...',
    'bugreport-submit' : 'Enviar',
    'bugreport-cancel' : 'Cancelar',
    'bugreport-confirm' : 'Su informe de error ha sido enviado.\n\n¡Gracias!',
    'about-close' : 'Cerrar',
    'viewsource-jsonsource' : 'JSON analizado',
    'viewsource-originalsource' : 'JSON Original',
    'viewsource-close' : 'Cerrar',
    'viewsource-apply' : 'Aplicar',
    'viewimage-close' : 'Cerrar',
    'legend-pagination' : 'Página %page% de %pages%'
  };

  if (typeof zingchart !== 'undefined') {
    zingchart.i18n.es = locale;
  }
  else if (typeof window === 'undefined' && module.exports !== 'undefined'){
    module.exports = locale;
  }
})();
