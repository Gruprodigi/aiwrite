"use strict";

// Ckeditor Active
ClassicEditor.create( document.querySelector( '#description' ) )
.catch( error => {
    console.error( error );
} );
