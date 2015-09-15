$(document).ready(function () {
    //this is the function used  for creating the menu
    getMenue();
    //for the transfer of of control
    $(document).on('click', 'li a', function () {
        $('ul li.active').removeClass('active');
        $(this).parent().addClass('active');
    });
});

//Begining of the function

function getMenue() {
    $.getJSON("data.json", function (data) {
        menu = '<ul class="nav nav-pills pull-right">';
        $.each(data.student, function (key, value) {
            if (key === 'details')
            {
                menu = menu + '<li class="dropdown active ">\n\
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">' + key + '<span class="caret "></span></a>';
                menu = menu + '<ul class="dropdown-menu ">\n\
                <li><a href="#">' + value.name + '</a></li>\n\
                <li><a href="#">' + value.age + '</a></li>\n\
                <li><a href="#">' + value.company + '</a></li></ul></li>';
            }
            else if (key === 'profile')
            {
                menu = menu + '<li class="dropdown ">\n\
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">' + key + '<span class="caret "></span></a>';
                menu = menu + '<ul class="dropdown-menu ">\n\
                <li><a href="#">' + value.qualification + '</a></li>\n\
                <li><a href="#">' + value.designation + '</a></li></ul></li>';
            }
            else if (key === 'project')
            {
                menu = menu + '<li class="dropdown ">\n\
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">' + key + '<span class="caret "></span></a>';
                menu = menu + '<ul class="dropdown-menu ">\n\
                <li><a href="#">' + value.project + '</a></li>\n\
                <li><a href="#">' + value.role + '</a></li></ul></li>';
            }
            else if (key === 'others')
            {
                menu = menu + '<li class="dropdown ">\n\
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">' + key + '<span class="caret "></span></a>';
                menu = menu + '<ul class="dropdown-menu ">\n\
                <li><a href="#">' + value.ctc + '</a></li>\n\
                <li><a href="#">' + value.allowance + '</a></li></ul></li>';
            }
        });
        menu = menu + '</ul>';
        $('body').append(menu);                                                          //creation of tabs
    });
}
;                                                                                                                           //End of function







