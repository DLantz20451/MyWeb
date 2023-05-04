
  $( function() {
    $( "#progressbar" ).progressbar({
      value: false
    });
    $( "button" ).on( "click", function( event ) {
      var target = $( event.target ),
        progressbar = $( "#progressbar" ),
        progressbarValue = progressbar.find( ".ui-progressbar-value" );
 
        if ( target.is( "#colorButton" ) ) {
            progressbarValue.css({
              "background": '#' + Math.floor( Math.random() * 16777215 ).toString( 16 )
        });
      }
    });
  } );
