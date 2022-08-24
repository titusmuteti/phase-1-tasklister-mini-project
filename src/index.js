document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    createElement(e.target.querySelector('#new-task-description').value)
  })
});
function createElement(TaskLister){
  let li = document.createElement('li'); //creating li element

  let btn = document.createElement('button') //creating a button

  btn.textContent ='Remove' //adding button  text content 

  li.textContent = `${TaskLister}  `; //adding li text content 

  li.appendChild (btn) //append button as a child to li

  btn.style.backgroundColor = 'yellow' //editing button background color

  document.querySelector('#tasks').appendChild(li) // appending the li element

  //adding eventlistener to the button
  btn.addEventListener('click', (e)=>{
    e.target.parentNode.remove();
  })

}

