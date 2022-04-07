const myset = new Set()
myset.add(1)          
myset.add(5)         
myset.add(5) 

let sum=0;
for(let [key,values] of myset.entries()){
    sum+=values;
   
}
console.log(sum);