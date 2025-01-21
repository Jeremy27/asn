(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('select').formSelect();

    // $('.infoBlock').click(function () {
    //   console.log($(this).children('.card-reveal').css('display'));
    //   if ($(this).children('.card-reveal').css('display') == 'none')
    //     $(this).children('.more').css('display', 'none');
    //   else if ($(this).children('.card-reveal').css('display') == 'block')
    //     $(this).hover(function () {
    //       $(this).children('.more').css('display', 'block');
    //     });
    // });


    // On initialise la latitude et la longitude de Paris (centre de la carte)
    var lat = 49.4918661676403;
    var lon = 0.116482973098755;
    var macarte = null;
    // Fonction d'initialisation de la carte
    function initMap() {
      // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
      macarte = L.map('map').setView([lat, lon], 17);
      // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
//      L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
//        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
//        minZoom: 1,
//        maxZoom: 20
//      }).addTo(macarte);
      // Nous ajoutons un marqueur
      var marker = L.marker([lat, lon]).addTo(macarte);
      marker.bindPopup('Anne-Sophie NOEL - Avocat').openPopup();
    }
    window.onload = function () {
      // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
      initMap();
    };
  }); // end of document ready
})(jQuery); // end of jQuery name space
