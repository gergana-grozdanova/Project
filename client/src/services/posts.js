import {getToken} from './token'

export function getAll(username){
return fetch(`http://localhost:5555/post/${username}`,{
    method: "GET",
    })
    .then(response=>{
    return response.json();
})
    .catch(err=>console.log(err))
};

export function getDate(post){
    const months={
      1:"Jan",
      2:"Feb",
      3:"March",
      4:"Apr",
      5:"May",
      6:"June",
      7:"July",
      8:"Aug",
      9:"Sep",
      10:"Oct",
      11:"Nov",
      12:"Dec"
    }
    let date=new Date(post.dateCreated);
    return `${date.getDate()} ${months[date.getMonth()+1]} ${date.getFullYear()}`
  }