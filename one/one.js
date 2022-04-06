/*
1->100
if div by 3 fizz
if div by 5 Buzz
if div by both FizzBuzz
*/

    for(let i=0;i<100;i++)
{
    if(i%5==0){
        console.log(i+" Buzz\n");
    }
    if(i%3==0){
        console.log(i+" Fizz\n");
    }
    if(i%5==0 && i%3===0){
        console.log(i+" FizzBuzz");
    }
}
