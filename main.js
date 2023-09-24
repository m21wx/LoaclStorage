
// Select Elements

 let allSpans = document.querySelectorAll('.buttons span');
 let results = document.querySelector('.results > span');		
 let theInput = document.getElementById('the-input');		
			
	allSpans.forEach(span =>{
		span.addEventListener('click',(e)=>{

			if(e.target.classList.contains('check-item')){
				checkItem();
			};
			if(e.target.classList.contains('add-item')){
				addItem();
			};
			if(e.target.classList.contains('delete-item')){
				deleteItem();
			};
			if(e.target.classList.contains('show-items')){
				showItems();
			};

		});
	});
	
	// function input
	function showMessage(){
			results.innerHTML =`Input Cant Be Empty `;
	}
	
	function checkItem(){
		 if(theInput.value !==''){
			 if(localStorage.getItem(theInput.value)){
				 results.innerHTML =` found Local Storage Item Called <span> ${theInput.value} </span> `;
				
			 }else{
				 results.innerHTML =` Not Local Storage Item With The Name <span> ${theInput.value} </span> `; 
			 }
		 }else{
			showMessage() 
		 } 
		 theInput.value ='';
	}
	
	function addItem(){
		  if(theInput.value !==''){
				localStorage.setItem(theInput.value,'test');
				results.innerHTML=`Local Storage Item <span> ${theInput.value} </span> Added `;
				theInput.value ='';
		}else{
			showMessage() 
		  }

	}
			
	function deleteItem(){
		  if(theInput.value !==''){
				if(localStorage.getItem(theInput.value)){
					localStorage.removeItem(theInput.value)
				    results.innerHTML =`  Local Storage Item  <span> ${theInput.value}</span> Delete `;
				 
			   }else{
				 results.innerHTML =` Not Local Storage Item With The Name <span> ${theInput.value} </span> `; 
			  }
		}else{
			showMessage() 
		  }
		  theInput.value ='';
	}
	function showItems(){
		  if(localStorage.length){
  
			 results.innerHTML =``;
		  for(let[key , value] of Object.entries(localStorage)){
				results.innerHTML +=`<span class='keys'> ${key} : ${value}</span> `; 
			 }
			
			
		   }else{
			   results.innerHTML =`Local Storage Is Empty` ;
		   }	
			 theInput.value ='';
	}		


















	