$(document).ready(function() {
    addTask();
    deleteTask();
    showVal();
    openNav();
    closeNav();
});

function openNav() {
    document.getElementById("avatar").style.width = "250px";
};
  
function closeNav() {
    document.getElementById("avatar").style.width = "0";
};

function addTask() {
    $('#put_task').click(function() {
        var task = $('#input_task').val();
        var weight = $('#input_weight').val();
        if (task === '' || weight === '') {
            return false;
        }
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

function showVal() {
    var weight = $('#input_weight').val();
    $('#importance_value').html(weight);
    $('#input_weight').change(function() {
        weight = $('#input_weight').val();
        $('#importance_value').html(weight);
    })
}
