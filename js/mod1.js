// console.log('works');
var sub=document.querySelector('#sub');
function addToDo(event){
	event.preventDefault();
	// console.log('works');
	var fname=document.querySelector('#fname');
	var todo=document.querySelector('#list');
	if(fname.value===''){
		return false;
	}
	todo.innerHTML+='<li>' + fname.value + '</li>';
	fname.value='';
	// console.log(fname.value)
	// console.log(todo);
}
sub.addEventListener('click',addToDo,false);