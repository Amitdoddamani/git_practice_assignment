let num=12
let count=0
for(let i=1;i<=num;i++)
{
if(num%i==0)
{
count++
}
}
if(count==1){
console.log("yes its prime")
}
else
{
console.log("Not a prime")
}