//map,filter,arrow functions..

function sum(n){
    return n*=2;
}

// const answer=(n)=>{
//     let ans=0;
//     for(let i=0;i<=n;i++)
//         ans+=i;
//     return ans;
// }

const input=[1,2,3,4,5,6];
const ans=input.map(sum);
console.log(ans);

//create a map function that takes 2 inputs an array and a trasnformation fn
// that transforms the array into the new array 


/* given an input array give back all the even values from it 

///filtering

*/


const ans1=input.filter((n)=>
{
   if(n%2==0)
   return true;
return false;
});

console.log(ans1);
