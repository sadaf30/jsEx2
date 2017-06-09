// console.log('works');
var sub=document.querySelector('#sub');
var todo=document.querySelector('#list');
function addToDo(event){
	event.preventDefault();
	// console.log('works');
	var fname=document.querySelector('#fname');
	
	if(fname.value===''){
		return false;
	}
	todo.innerHTML='<li><i class="fa fa-window-close close-todo" aria-hidden="true"></i>'+ fname.value + '</li>' + todo.innerHTML;
	fname.value='';
	// console.log(fname.value)
	// console.log(todo);
}
function removetodo(event){
	// console.log(event.target);
	// console.log(event.target.classList.contains('close-todo'));
	if(event.target.classList.contains('close-todo')){
		var li=event.target.parentElement;
		todo.removeChild(li);

	}
}

sub.addEventListener('click',addToDo,false);
todo.addEventListener('click',removetodo,false);













