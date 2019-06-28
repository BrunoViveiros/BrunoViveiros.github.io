window.onscroll = function () { 
	let items = document.getElementById('navbar').children.length
	let anch1 = document.getElementById('skills-anchor').offsetTop;
	let anch2 = document.getElementById('projects-anchor').offsetTop;
    let anch3 = document.getElementById('contact-anchor').offsetTop;
    let scroll = window.innerHeight/2 + window.pageYOffset;
	
	//Faz navbar aparecer após section home e desaparecer antes
	for (let i = 0; i < items; i++) {
		if ( scroll < anch1 ) {
			document.getElementById('navbar').children[i].style.right = '-200px'
		} else {
			document.getElementById('navbar').children[i].style.right = '-70px'
		}
	}

	//Muda cor do icone se estiver na section correspondente
	if ( scroll <= anch1 ) {
		document.getElementById('nav-home').children[0].style.color = '#FF851B';
    	document.getElementById('nav-skills').children[0].style.color = '';
    	document.getElementById('nav-projects').children[0].style.color = '';
		document.getElementById('nav-contact').children[0].style.color = '';
    } else if ( scroll >= anch1 && scroll <= anch2 ) {
    	document.getElementById('nav-home').children[0].style.color = '';
    	document.getElementById('nav-skills').children[0].style.color = '#6B5B95';
    	document.getElementById('nav-projects').children[0].style.color = '';
    	document.getElementById('nav-contact').children[0].style.color = '';
    } else if ( scroll >= anch2 && scroll <= anch3 ) {
    	document.getElementById('nav-home').children[0].style.color = '';
    	document.getElementById('nav-skills').children[0].style.color = '';
    	document.getElementById('nav-projects').children[0].style.color = '#0074D9';
    	document.getElementById('nav-contact').children[0].style.color = '';
	} else {
    	document.getElementById('nav-home').children[0].style.color = '';
    	document.getElementById('nav-skills').children[0].style.color = '';
    	document.getElementById('nav-projects').children[0].style.color = '';
    	document.getElementById('nav-contact').children[0].style.color = '#01FF70';
	}
	
	


};