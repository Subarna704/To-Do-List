const btn = document.querySelector(".btn");
const myArray = [];
const msg = document.querySelector(".work-list");
const work = document.querySelector(".list");
const date = document.querySelector(".date");






const showlist = () => {
    let code = "";
    for(i=0; i<myArray.length; i++) {
        const newArrayobject = myArray[i];
        const {name} = newArrayobject;
        const {duedate} = newArrayobject;
        
        code += `
        <div class="list-css">${name}</div>
        <div class="list-css">${duedate}</div>
        <button class="delete-css"onclick="
            myArray.splice(${i}, 1);
            showlist();
        ">Delete</button>
        `;
    }
    msg.innerHTML = code;
  
}


const addlist = ()=> {
       const name = work.value;
       const duedate =date.value
    myArray.push({
         name,
        duedate
    });
    showlist();
    work.value = "";
}


btn.addEventListener("click", addlist)

