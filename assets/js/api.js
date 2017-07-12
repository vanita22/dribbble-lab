$(document).ready(function(){
    $(function() {
            $.getJSON('https://api.dribbble.com/v1/users/eduardo/shots?access_token=f3aaee71f13cfc02e29d30301579ee0de33e0646018c0f63d1883d552709e2bb&callback=?', function(resp) {
                if (resp.data.length > 0) {                         
                    $.each(resp.data.reverse(), function(i, val) {
                        $('#dribbble').prepend(
                        '<li class="box"><img class="cover-card" src="'+val.images.normal+'" /><i class="fa fa-eye" aria-hidden="true"> '+val.views_count+'</i><i class="fa fa-comment-o" aria-hidden="true"> '+val.comments_count+'</i><i class="fa fa-heart" aria-hidden="true"> '+val.likes_count+'</i></li>'
                        );
                    });
                }
                else {
                $('#dribbble').append('<li>No shots.</li>');
            }
        });                                     
    });
});