document.addEventListener('click' ,function (){
	let input1 = document.getElementById('user_input1').value;
	let input2 = document.getElementById('user_input2').value;
	let input3 = document.getElementById('user_input3').value; 
	let input4 = document.getElementById('user_input4').value;
	
	if (input1 && input2 && input3 && input4 != 0){
		let testCount = 0;
		if(localStorage.getItem('test-count') == null){
			localStorage .setItem('test-count' ,0);
			testCount = 0;
		}
		else{
			testCount = localStorage.getItem('test-count');
		}
	
		localStorage.setItem('test-'+((testCount*1)+1),input1);
		localStorage.setItem('test-'+((testCount*1)+2),input2);
		localStorage.setItem('test-'+((testCount*1)+3),input3);
		localStorage.setItem('test-'+((testCount*1)+4),input4);
		
		localStorage.setItem('test-count',((testCount*1)+4));
		console.log('proceed');
		

		let testCountNumber = (testCount*1)+1;
		let content = "";
		for(let a = 1; a<= testCountNumber; a++){
			content += "<li>" + localStorage.getItem('test-'+a)+"</li>";
		}
		document.getElementById('display_list').innerHTML = content;
		document.getElementById('user_input1').value = "";
		document.getElementById('user_input2').value = "";
		document.getElementById('user_input3').value = "";
		document.getElementById('user_input4').value = "";		
	}
});