// jQuery Mobile functionality
$(document).ready(function() {
    console.log("Mobile.js loaded!");

    // Button click handler
    $('#clickMe').on('click', function() {
        $('#result').html('<p style="color: green; font-weight: bold;">✓ Button clicked successfully!</p>').show();
    });

    // Form submission handler
    $('form').on('submit', function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        if (name && email && message) {
            alert('Thanks for reaching out, ' + name + '! We\'ll get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Page transition animation
    $(document).on('pageshow', function() {
        console.log("Page shown: " + $.mobile.activePage.attr('id'));
    });
});
