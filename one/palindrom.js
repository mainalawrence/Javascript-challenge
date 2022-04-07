let number=75257;
let newnum="";
for(let i=number.toString().length;i>=0;i--){
   newnum+=number.toString().charAt(i);
}
if(parseInt(newnum)===number){
    console.log(true);
   }
   else{
       console.log(false);
   }
   