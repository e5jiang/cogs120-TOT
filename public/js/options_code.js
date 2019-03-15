$(document).ready(function() {
    $('.option_text input').keyup(function() {

        var empty = false;
        $('.option_text input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });
    
        if (empty) {
            $('.submit_options button').attr('disabled', 'disabled');
        } else {
            $('.submit_options button').attr('disabled', false);
        }
    });
    
    $('#save_option1').click(function(){
        alert("First option saved!");
    });

    $('#save_option2').click(function(){
        alert("Second option saved!");
    });

    showVals();
});

function openNav() {
    document.getElementById("avatar").style.width = "250px";
};
  
function closeNav() {
    document.getElementById("avatar").style.width = "0";
};

$(".dropdown-menu li a").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

function showVals() {
    var weight = $('#work_slider_one').val();
    $('#work_value_one').html(weight);
    $('#work_slider_one').change(function() {
        weight = $('#work_slider_one').val();
        $('#work_value_one').html(weight);
    })

    var weight = $('#work_slider_two').val();
        $('#work_value_two').html(weight);
    $('#work_slider_two').change(function() {
        weight = $('#work_slider_two').val();
        $('#work_value_two').html(weight);
    })

    var weight = $('#quick_slider_one').val();
    $('#quick_value_one').html(weight);
    $('#quick_slider_one').change(function() {
        weight = $('#quick_slider_one').val();
        $('#quick_value_one').html(weight);
    })

    var weight = $('#quick_slider_two').val();
        $('#quick_value_two').html(weight);
    $('#quick_slider_two').change(function() {
        weight = $('#quick_slider_two').val();
        $('#quick_value_two').html(weight);
    })

    var weight = $('#future_slider_one').val();
        $('#future_value_one').html(weight);
    $('#future_slider_one').change(function() {
        weight = $('#future_slider_one').val();
        $('#future_value_one').html(weight);
    })

    var weight = $('#future_slider_two').val();
        $('#future_value_two').html(weight);
    $('#future_slider_two').change(function() {
        weight = $('#future_slider_two').val();
        $('#future_value_two').html(weight);
    })
}

$(window).load(function () {
    var submit = false;
    $("#weigh_options").click(function(e) {
        $('#scale_pic').hide();
        $('#scale_gif').show();
         setTimeout(function(){
            submit = true;
            $("#addOptionsForm").submit(); // if you want            
         }, 5000);
         if(!submit)
            e.preventDefault();
    });
});
