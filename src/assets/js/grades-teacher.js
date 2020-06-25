$('#icol').click(function() {
    if ($('#col').val()) {
        $('#mtable tr').append($("<th>"));
        $('#mtable thead tr>th:last').html($('#col').val());
    } else { alert('Enter Text'); }
});