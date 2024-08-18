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
        <p>
        ${name} ${duedate}
          <button onclick="
            myArray.splice(${i}, 1);
            showlist();
          ">Delete</button>
        </p>
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

