$( function() {

    // slick nav init
    $('#menu').slicknav({
        appendTo: '.header .flex-container.justify-sp-between',
        label: ''
    });

    //search
    $('a[href="#search"]').on('click', function(event) {
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });


    // sticky header

    $('#header').removeClass('sticky');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 130) {
            $('#header').addClass('sticky').fadeIn('fast');
        } else {
            $('#header').removeClass('sticky').fadeIn('fast');
        };
    });

});

