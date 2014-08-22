var navHeaders = document.getElementsByClassName("nav-header");
var i;
for (i=0; i<navHeaders.length; i++) {
    navHeaders[i].addEventListener(
                    "mouseover", 
		    function() { 
		          showMenu(this);
			  this.style.backgroundColor = "blue";
		    });
    navHeaders[i].addEventListener(
                   "mouseout",
		   function() { 
		       this.style.backgroundColor = "red";
		   });
}

var dropMenus = document.getElementsByClassName("drop-menu");
var i;
for(i=0; i<dropMenus.length; i++) {
    dropMenus[i].addEventListener(
		  "mouseout", 
		  function () { hideMenu(this) });
}

function showMenu(headMenu){
    var subMenu = document.querySelector("ul." + headMenu.id);
    subMenu.style.display="block";
}

function hideMenu(menu){
    menu.style.display="none";
}
