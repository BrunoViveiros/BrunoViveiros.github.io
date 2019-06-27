window.onscroll = function () { 
    let anch1 = document.getElementById('projects-anchor').offsetTop;
    let anch2 = document.getElementById('contact-anchor').offsetTop;
    let scroll = window.innerHeight/2 + window.pageYOffset;
	
	if ( scroll <= anch1 ) {
		document.getElementById('nav-home').children[0].style.color = '#E08119';
    	document.getElementById('nav-projects').children[0].style.color = '';
		document.getElementById('nav-contact').children[0].style.color = '';
    } else if ( scroll >= anch1 && scroll <= anch2 ) {
    	document.getElementById('nav-home').children[0].style.color = '';
    	document.getElementById('nav-projects').children[0].style.color = '#00539C';
    	document.getElementById('nav-contact').children[0].style.color = '';
    } else {
    	document.getElementById('nav-home').children[0].style.color = '';
    	document.getElementById('nav-projects').children[0].style.color = '';
    	document.getElementById('nav-contact').children[0].style.color = '#9B1B30';
	}
	
	if ( scroll < anch1 ) {
		document.getElementById('navbar').children[0].style.right = '-200px'
		document.getElementById('navbar').children[1].style.right = '-200px'
		document.getElementById('navbar').children[2].style.right = '-200px'
	} else {
		document.getElementById('navbar').children[0].style.right = '-70px'
		document.getElementById('navbar').children[1].style.right = '-70px'
		document.getElementById('navbar').children[2].style.right = '-70px'
	}

};