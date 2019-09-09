/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

  axios.get('https://api.github.com/users/kip-guile')
    .then(response => { // response is what the promise resolved to (what it looks is up to axios)
      cards.appendChild(githubInfo(response.data));
    })
    .catch(error => { // error is what the promise rejected to (what it looks like depends on axios)
      document.body.innerText = error.message;
    });



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards');

function githubInfo (data){
  const InfoDiv = document.createElement('div')
  const innerInfoDiv = document.createElement('div');
  const name = document.createElement('h3');
  const image = document.createElement('img');
  const login = document.createElement('h3');
  const location = document.createElement('p');
  const html_url = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const link = document.createElement('a');

  InfoDiv.classList.add('card');
  innerInfoDiv.classList.add('card-info');
  name.classList.add('name');
  login.classList.add('username');

  name.textContent = data.name;
  login.textContent = data.login;
  location.textContent = "Location: " + data.location;
  link.textContent = "Profile: " + data.html_url;
  followers.textContent = "Followers: " + data.followers;
  following.textContent = "Following: " + data.following;
  bio.textContent = "Bio: " + data.bio;
  image.setAttribute('src', data.avatar_url);

  InfoDiv.appendChild(image);
  InfoDiv.appendChild(innerInfoDiv);

  innerInfoDiv.appendChild(name);
  innerInfoDiv.appendChild(login);
  innerInfoDiv.appendChild(location);
  html_url.appendChild(link);
  innerInfoDiv.appendChild(html_url);
  innerInfoDiv.appendChild(followers);
  innerInfoDiv.appendChild(following);
  innerInfoDiv.appendChild(bio);
  
  
  return InfoDiv;
}



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["https://api.github.com/users/tetondan", 
                        "https://api.github.com/users/dustinmyers", 
                        "https://api.github.com/users/justsml", 
                        "https://api.github.com/users/luishrd",
                        "https://api.github.com/users/bigknell"
                      ];

followersArray.forEach(follower =>{
  axios.get(follower)
    .then(response => { // response is what the promise resolved to (what it looks is up to axios)
      cards.appendChild(githubInfo(response.data));
    })
    .catch(error => { // error is what the promise rejected to (what it looks like depends on axios)
      document.body.innerText = error.message;
    });
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
