$.getJSON( "https://jsonplaceholder.typicode.com/users", function( data ) {

  $.each( data, function( key, val ) {
    $('body').append(addCard(val));
  });
});

function addCard(val) {

  return result ="<div class='card' style='width: 20%; display: inline-block;   border-top: 5px dashed #8c8b8b; margin-top:5px;'>\
  <div class='card-body border border-info rounded'>\
    <h3 class='card-title'>"+val.name+"</h3>\
    <h6 class='card-subtitle mb-2 text-muted'>"+val.username+"</h6>\
    <p class='card-text'>Address<br/>\
      Street: "+val.address.street+"<br/>\
      Suite: "+val.address.suite+"<br/>\
      City: "+val.address.city+" </p>\
    <a href='#' class='btn btn-primary'>Interesting</a>\
  </div>\
</div>";

}
