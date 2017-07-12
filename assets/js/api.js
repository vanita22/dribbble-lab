$(document).ready(function(){

    $(function() {

            $.getJSON('https://api.dribbble.com/v1/users/eduardo/shots?access_token=f3aaee71f13cfc02e29d30301579ee0de33e0646018c0f63d1883d552709e2bb&callback=?', function(resp) {

                if (resp.data.length > 0) {                          

                    $.each(resp.data.reverse(), function(i, val) {

                        $('#dribbble').prepend(

                        '<img src="'+val.images.normal+'"/><h2>'+val.title+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p>'                  

                    );

                });

                }

                else {

                $('#dribbble').append('<li>No shots.</li>');

            }

        });                                     

    });

});