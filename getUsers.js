
let deferredPrompt;

$.getJSON( "https://jsonplaceholder.typicode.com/users", function( data ) {

  $.each( data, function( key, val ) {
    $('body').append(addCard(val));
  });
});

function addCard(val) {

  return result ="<div class='col col-md-3 col-lg-3 col-sm-6  border border-primary' style='display: inline-block;'>\
  <div class='card-body border border-info rounded'>\
    <h3 class='card-title'>"+val.name+"</h3>\
    <h6 class='card-subtitle mb-2 text-muted'>"+val.username+"</h6>\
    <p class='card-text'>Address<br/>\
      Street: "+val.address.street+"<br/>\
      Suite: "+val.address.suite+"<br/>\
      City: "+val.address.city+" </p>\
    <a href='#' class='btn btn-primary'>Interesting</a> <hr>\
  </div>\
</div>";

}
  $('#space').height($('header').height()+20);

  //Register service worker

  if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
  } else {
    navigator.serviceWorker.register('pwabuilder-sw.js', {
      scope: './'
    }).then(function(reg) {
      console.log('Service worker has been registered for scope:'+ reg.scope);
    }).catch(function(err){
      console.log('Error registering service worker for scope:'+ reg.scope);
    });
  }

  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
   // Stash the event so it can be triggered later.
    deferredPrompt = e;
});

window.addEventListener('appinstalled', (evt) => {
  alert('a2hs', 'installed');
});

var txt;
var r = confirm("¿Quieres instalar esta app en tu escritorio?");
if (r == true) {
  deferredPrompt.prompt();
// Wait for the user to respond to the prompt
deferredPrompt.userChoice
  .then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
}
