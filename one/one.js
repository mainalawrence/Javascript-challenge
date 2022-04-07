/*
1->100
if div by 3 fizz
if div by 5 Buzz
if div by both FizzBuzz
*/
    for(let i=1;i<=100;i++)
{
    if(i%5===0 && i%3===0){
        console.log(i+" FizzBuzz");
        continue;
    }
     else if(i%5==0){
        console.log(i+" Fizz");
        continue;

    }
     else if(i%3===0){
        console.log(i+" Buzz");
        continue;

    }else{
        console.log(i);

    }
}
