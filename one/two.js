const numms=[20,69,49,24,54,76,24,76,22,78,99,78,09]
const target=78;

const funfor=(numms,target)=>{
    let s=0,f=0;
for(let i=0;i<numms.length;i++){
    if(i>1){
        f++;
    }
    if(i>2){
        s++;
    }
    if(numms[i]!=target){
        continue;
    }
    console.log(i);
    break;
}

}
const funwhile=(numms,target)=>{
    let i=0;
    let f=0,s=0;
        while(i<=numms.length)
        {
            if(i>1){
                f++;
            }
            if(i>2){
                s++;
            }
            if(numms[i]!==target){
                i++;
               continue
              
            }
            console.log(i+" first: "+f+" second: "+ s);
            i++;
        }
       
}

funwhile(numms,target);

