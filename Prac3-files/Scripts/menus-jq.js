$(document).ready( function() {
    $(".nav-header").hover(
		    function() { 
			showMenu(this);
			$(this).css("background-color", "blue");
		    },
		    function() { 
			hideMenu(this);
			$(this).css("background-color", "red");
		    });
	});


function hideMenu(headMenu) {
    $("ul."+ headMenu.id.trim()).slideUp();
}

function showMenu(headMenu){
    $("ul."+ headMenu.id.trim()).slideDown();
}

