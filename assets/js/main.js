/* Acá va todo el jquery */
$(document).ready(function(){
	$(function() {
			$.getJSON('https://api.dribbble.com/v1/users/eduardo/shots?access_token=f3aaee71f13cfc02e29d30301579ee0de33e0646018c0f63d1883d552709e2bb&callback=?', function(resp) {

				if (resp.data.length > 0) {							
					$.each(resp.data.reverse(), function(i, val) {
						//console.log(resp)
						$('#dribbble').prepend(
						//'<li class="box"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li>'
						'<li class="box" id="img-overlay"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li>'+
						//se genera overlay con el texto pero el estilo no queda bien definido
						//$('#img-overlay').prepend('<div class="overlay">'+'<div class="text">'+val.description+'</div>'+'</div>')
						);
						
					});
				}
				else {
				$('#dribbble').append('<li>No shots.</li>');
			}
			
		});	
		  							    
	});

		
	/*overlay
	$(function() {
			$.getJSON('https://api.dribbble.com/v1/users/eduardo/shots?access_token=f3aaee71f13cfc02e29d30301579ee0de33e0646018c0f63d1883d552709e2bb&callback=?', function(resp) {
				$('#img-overlay').prepend('<div class="overlay">'+'<div class="text">'+"Hello World"+'</div>'+'</div>');
		});	
		  							    
	});*/
});