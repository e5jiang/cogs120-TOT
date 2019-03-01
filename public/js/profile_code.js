var li_elems = [];
$(document).ready(function() {
    addTask();
    deleteTask();
});

function addTask() {
    $('#put_task').click(function() {
        var task = $('#input_task').val();
        if (task === '') {
            return false;
        }
        li_elems.push(task);
        var li = '<li class="list-group-item">'+ task +
        '<button type="button" class="close" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</li>';
    })
}

function deleteTask() {
    $('#task_list').on('click', '.close', function(){
        for( var i = 0; i <= li_elems.length-1; i++){
            if ( li_elems[i] === $(this).parent().text().slice(0,-1)) {
                li_elems.splice(i, 1); 
            }
        }
        $(this).parent().remove(); 
    })
}

