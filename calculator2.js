function dis(val)
{
document.getElementById("display").value+=val;
 }

 function solve()
{
let x = document.getElementById("display").value;
let y = eval(x);
document.getElementById("display").value = y;
};
function clr()
{
document.getElementById("display").value = "";
}

function back(){
    let bc=document.getElementById("display").value;
    temp=bc.slice(0,-1);
    document.getElementById("display").value=temp;

}