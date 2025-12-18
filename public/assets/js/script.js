"use strict";

$("#checkAll").on('click',function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});