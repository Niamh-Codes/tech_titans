$(document).ready(function () {
 

            fetch( 'https://hellosalut.stefanbohacek.dev/?mode=auto' )
.then( function( response ){
  return response.json()
} )
.then( function( jsonData ){
  console.log( jsonData ) 
} );