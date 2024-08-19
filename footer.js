$(document).ready(function() {
            $('#current-year').text(new Date().getFullYear());
            $('#store-locator-form').on('submit', function(e) {
                e.preventDefault();
                let zipCode = $('input[aria-label="Zip Code"]').val();
                if (zipCode) {
                    $('#response-message').text('Nearest store location: 123 Main St, City, State 12345');
                } else {
                    $('#response-message').text('Please enter your zip code.');
                }
            });
        });