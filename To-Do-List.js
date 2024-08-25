const btn = document.querySelector(".btn");
const myArray = [];
const msg = document.querySelector(".work-list");
const work = document.querySelector(".list");
const date = document.querySelector(".date");






const showlist = () => {
    let code = "";

    myArray.forEach((value,index)=> {
        const {name} = value;
        const {duedate} = value; 

        console.log(name, duedate)
    

        // for(i=0; i<myArray.length; i++) {
        //     const newArrayobject = myArray[i];
        //     const {name} = newArrayobject;
        //     const {duedate} = newArrayobject;
        
        code += `
        <div class="list-css">${name}</div>
        <div class="list-css">${duedate}</div>
        <button class="delete-css" >Delete</button>
        `;
    })
    msg.innerHTML = code;

    document.querySelectorAll(".delete-css").addEventListener("click", (index)=> {
        myArray.splice(index, 1);
        showlist();

    })
  
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
    date.value = "";
}


btn.addEventListener("click", addlist)

