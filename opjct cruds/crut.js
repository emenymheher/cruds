let title=document .getElementById("title");
let price=document .getElementById("price"); 
let taxes =document .getElementById("taxes");
let ads=document .getElementById("ads");
let discount=document .getElementById("discount");
let total =document .getElementById("total");
let count=document .getElementById("count");
let category=document .getElementById("category");
let submit=document .getElementById("submit");

function getTotal()
{
if(price.value !='')
{

let reslut =(+ price.value + +taxes.value + +ads.value)
+ -discount.value;
total.innerHTML=reslut;
total.style.background='#040'

}else{

total.innerHTML = '';
total.style.background='#a00d02';

}

}
let datapro;

if( localStorage.product !=null){
datapro=JSON.parse( localStorage.product)

}else{

let datapro =[ ];
}
submit.onclick=function(){

let  newpro = { 

title:title.value,
price:price.value,
taxes:taxes.value,
ads:ads.value,
discount:discount.value,
total:total.innerHTML,
count:count.value,
category:category.value,

}
datapro .push(newpro)
localStorage.setItem( 'product',JSON.stringify(datapro) )
clearData()
showedata()
}


//clear data



function clearData() {

title.value='';
price.value='';
taxes.value='';
ads.value='';
discount.value='';
total.innerHTML='';
count.value='';
category.value='';

}
//Read



function showedata(){
let table=' ';
for( let i=0;i<datapro.length;i++ )

 
document.getElementById('tbody').innerHTML=table;
}