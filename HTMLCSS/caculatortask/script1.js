let input =document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');


let string="";
let arr= Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML =='='){
            string=eval(string);
            input.value = string;
        }

      else if(e.target.innerHTML=='AC'){
        string="";
        input.value=string;

      }

      else if
        (e.target.innerHTML=='Delete'){
            string+string.substring(0,string.legth-1);
            input.value=string;

        }

      
      else{
        string+=e.target.innerHTML;
        input.value=string;

      }

       
    })
})

