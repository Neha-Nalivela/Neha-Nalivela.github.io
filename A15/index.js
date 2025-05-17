
function greet(){
    setTimeout(()=>{
        console.log("Hello World")
    },2000);
  console.log("Hello World")
}
 
async function dispData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json()
  console.log(data);
}
dispData();
greet()