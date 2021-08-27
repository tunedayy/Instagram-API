//Request Headers
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

//API link & access token - add your access token to get media from your profile
const link = "https://graph.instagram.com/me/media";
const access_token = ""

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