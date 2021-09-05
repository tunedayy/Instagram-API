//Request Headers
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const token = document.getElementById("token");
const btn = document.querySelector(".btn");
let access_token

btn.addEventListener("click", function(){

  const link = "https://graph.instagram.com/me/media";
  access_token = token.value;

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
//get data from API
  fetch(`${link}?fields=id,caption,media_type,media_url,username,timestamp&access_token=${access_token}`, requestOptions)
    .then(response => response.json())
    .then(result => fetchPosts(result.data));

  //Display data 
  function fetchPosts(posts){
      let getPosts = posts.map(function(post){

          return `<div class="content">
          <div class="header">
              <h4 id="username">${post.username}</h4>
          </div>
          <img id="img" src=${post.media_url} alt="">
          <p id="caption"><span>${post.username}</span>${post.caption}</p>
          </div>`;

      })

    getPosts = getPosts.join("");
    document.querySelector('.container').innerHTML = getPosts;
}
})
