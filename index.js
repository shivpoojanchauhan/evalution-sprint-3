// Write all the JS Code related to Home Page Here 
document.querySelector("form").addEventListener("submit",myJob);
function myJob(){
    event.preventDefault();

    var Name=document.getElementById("name").value;
    var job=document.getElementById("job").value;
    var department=document.getElementById("department").value;
    var salary=Number(document.getElementById("salary").value);
    var experience=Number(document.getElementById("experience").value);
    var email=document.getElementById("email").value;
    
    
    
    var tr1=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=Name;

    var td2=document.createElement("td");
    td2.innerText=job;

    var td3=document.createElement("td");
    td3.innerText=department;

    var td4=document.createElement("td");
    td4.innerText=salary;

    var td5=document.createElement("td");
    td5.innerText=experience;

    var td6=document.createElement("td");
    td6.innerText=email;

    var td7=document.createElement("td");
    td7.innerText=salary*experience;
    
    var td8=document.createElement("td");

   



    td8.innerText="Delete";
    td8.style.backgroundColor="red";
    td8.style.color="white";
    td8.addEventListener("click", addRow);

    tr1.append(td1,td2,td3,td4,td5,td6,td7,td8);
   document.querySelector("tbody").append(tr1);


}

function addRow(){
    console.log(event.target.parent.add());
}
