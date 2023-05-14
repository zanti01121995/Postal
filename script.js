
   async function foo(){
    let d1 = document.getElementById("pin").value;
    let url = `https://api.postalpincode.in/pincode/${d1}`;
    let d2 =await fetch(url);
    let d3 =await d2.json();
    let temp=[]
    let temp2=[]
    temp.push(d3[0].PostOffice[0].State,d3[0].PostOffice[0].Region,d3[0].PostOffice[0].Block);
    console.log(...temp);
    for(i=0;i<d3[0].PostOffice.length-1;i++){
        temp2.push(d3[0].PostOffice[i].Name)
    }
    see(d1,temp,temp2);
   }
 
   function see(d1,temp,temp2){
    var div2 = document.createElement("div");
    div2.classList=("row");
    div2.style.margin="20px"

    
           div2 .innerHTML=`
         
           <div class="col">
               <div class="card">
                   <div class="card-header">
                     <h6>Your Pincode is ${d1}</h6>
                   </div>
                   <div class="card-body">
                    <p><b>State</b> : ${temp[0]}</p>
                    <p><b>Region</b> : ${temp[1]}</p>
                    <p><b>Block</b> : ${temp[2]}</p>
                    <p><b>Area of the Post Offices</b> : ${temp2}</p>
                   </div>
                 </div>
           </div>
    
            `
               document.body.append(div2);
   }