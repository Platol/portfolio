window.onload=function(){
//	header
	(function(){
		var oHeader=document.getElementById('header');
		var oLogo=oHeader.getElementsByClassName('logo')[0];
		var oHamburger=oHeader.getElementsByTagName('i')[0];
		var oNav=oHeader.getElementsByTagName('ul')[0];
		var oP=oHeader.getElementsByTagName('p')[0];
		var oForm=oHeader.getElementsByTagName('form')[0];
		
		oHamburger.onclick=function(){
			if(this.clicked){
				hide();
				this.clicked=false;
			}else{
				show();
				this.clicked=true;
			}
		}
		
		window.onresize=function(){
			var clientWidth=document.body.clientWidth;
			
			if(clientWidth>991){
				show();
				oHamburger.clicked=true;
			}else{
				hide();
				oHamburger.clicked=false;
			}
		}
		
		function show(){
			oNav.style.display='block';
			oP.style.display='block';
			oForm.style.display='block';
		}
		
		function hide(){
			oNav.style.display='none';
			oP.style.display='none';
			oForm.style.display='none';
		}
	})();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}