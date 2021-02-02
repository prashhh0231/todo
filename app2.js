//show date
showData();

//get data of button and text from input
let addBtn = document.getElementById("addBtn");
let val =document.getElementById("addTxt").value;
let clr = document.getElementById("clear");
// let edit = document.getElementById("edit");
//clear button function
clr.addEventListener("click",function()
{
    localStorage.clear();
    showData();
});

//click on add text function call
addBtn.addEventListener("click",function()
{
        let addTxt = document.getElementById("addTxt");
        if(addTxt.value=="")
        {
         
        }
        else
        {
          let notes = localStorage.getItem("note");
       if(notes == null)
       {
           notesObj = [];
       }
       else
       {
           notesObj = JSON.parse(notes);
       }
       notesObj.push(addTxt.value);
       localStorage.setItem("note",JSON.stringify(notesObj));
       addTxt.value="";
       showData();
        }
       
    
});


//this is show data 
function showData()
{
    let notes = localStorage.getItem("note");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }
    let html ="";
   notesObj.forEach(function(element,index){
    html+=`
            <tr>
                <td>${index+1}</td>
                <td>${element}</td>
               
                <td><button  id=${index}  onclick="deleteNote(this.id)"><i class="fa fa-trash" style="font-size:24px"></i></button></td>
            </tr>`;
      });

      let noteElm = document.getElementById("showData");
      if(notes != 0)
      {
        noteElm.innerHTML =html;
      }
    }


//this is edit data
    function editNote(index)
    {
        let val =index;
        // let txt =document.getElementById("addTxt").value;
        let notes =localStorage.getItem("note");

        if(notes == null)
        {
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes);
        }
       // let txt=notesObj[val];
       //  document.getElementById("addTxt").value=val;
       // 
    
       document.getElementById("addTxt").value=notesObj[val];
        document.getElementById("save").style.display="inline";
        document.getElementById("addBtn").style.display="none";

        let saveBtn = document.getElementById("save").click();
        // console.log(val);
        saveBtn.addEventListener("click",function(index)
          {
            console.log("index");
            let word = document.getElementById("addTxt").value;
            // console.log(notesObj[val]);

          });
        }
    //     function edit(val)
    //     {
    //       console.log(val);
    //       notesObj[val]=document.getElementById("addTxt").value;
    //       // console.log(notesObj[val]);
    //      // localStorage.setItem("note",JSON.stringify(notesObj));
         
    //    // addTxt.value="";
    //    // showData();

    //     }
       
    // }
       
        
    


//this is delete notes
      function deleteNote(index)
      {
          let notes =localStorage.getItem("note");
          if(notes == null)
          {
              notesObj = [];
          }
          else{
              notesObj = JSON.parse(notes);
          }
        //  console.log(index);
          notesObj.splice(index, 1);
          localStorage.setItem("note", JSON.stringify(notesObj));
          showData();
        }

     
        