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

  if ('serviceWorker' in navigator) {
     navigator.serviceWorker
              .register('./service-worker.js')
              .then(function() { console.log('Service Worker Registered'); });
   }
