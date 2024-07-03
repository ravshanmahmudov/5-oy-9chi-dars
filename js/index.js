// let isExistBOok = true;

// let promise = new promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (isExistBOok) {
//       resolve("kitob bor ekan");
//     } else {
//       reject("kitob yoq ekan");
//     }
//   }, 2000);
// });

// promise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("vada tugadi");
//   });

// async function fetchData(){
// return 'Data fetchet'
// }
// fetchData().then(data=>console.log(data));

// let a = 5;
// try{
// console.log(a);
// }catch(error){
// console.log(error);
// }

// let a = 5;
// try{
// console.log(3,a);
// }catch(error){
// console.log(5,error);
// }

// fetch("https://cars-pagination.onrender.com/all-countries",{
// method:"Get"

// })
// .then(function(response){
// if(response.status==200){
// return response.json()
// }
// })
// .then(function(data){
// console.log(data);
// })
// .catch(function(err){
// console.log(err);
// })

const wrapper = document.getElementById("wrapper");
function createCard(user) {
  return `
  <div class="card">
  <img src="${user.flag}" width="300" height="300" alt="">
  <h2>${user.country}</h2>
  <h2>${user.code}</h2>
  <h2>${user.id}</h2>
</div>
  `;
}
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/all-countries")
    .then(function (resp) {
      if (resp.status < 300) {
        return resp.json();
      }
    })
    .then(function (data) {
      data.length > 0 &&
        data.forEach((user) => {
          const card = createCard(user);
          wrapper.innerHTML += card;
        })
    })
    .catch(err=>{
    console.log(err);
    })
});
