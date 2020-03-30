/**
 *
 */

$(document).ready(function(){

    $.ajax({
        url: 'http://localhost:8080/api/productos/',
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization','Bearer ' + window.localStorage.getItem('access_token'));
        },
        success: function(data) {
            var html = "";
            $.each(data.content, function(index, value){
                html += '<tr>';
                html += '<td>'+ value.id+'</td>';
                html += '<td>'+ value.nombre+'</td>';
                html += '<td>'+ value.categoria+'</td>';
                html += '<td><img src=' + value.imagen + ' class="img-rounded" style="width:150px"></td>';
                html += '</tr>';
            });
            $("#productos-table-body").append(html);
        },
        error: function(xhr, textStatus, error) {
            console.log(xhr.responseText);
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);

        }
    });

});

