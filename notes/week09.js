//  POPUP BOXES

// There are 3 types of popup boxes: Alert box, Confirm box, and Prompt box

// I will show some examples of how to use these boxes

// THE FIRST ONE:
 window.alert("sometext");

//  this method can be written without the windows prefix.
// Example:

alert("I am an alert box!");

// try this code in order to see in your pag that a popup box is going to show up. This is
// very helpful to see the result of some code, and be able to debug, is not the same but 
// helps in your debugging like console.log

// SECOND ONE:
window.confirm("sometext");

// This method can be written without the window prefix
// example:

if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }

// This confirm button is very important for users when they want to delete some data or make an important
// change because they can make those changes accidentally; however, with the confirm window you
// will make sure they do not erase or change anything accidentally

//THIRD ONE:
window.prompt("sometext","defaultText");

// This method can be written without the windows prefix.

//Example:
var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}

// This is a prompt boxc used if you want the user to input a value before entering a page
// There are many ways users can input values, however, this is a good option to have if you
// want your page to look more dynamic and caught the attention of the user.



// This is my favorite topic of the whole Front-end development.
// This is about the APIs

//   APIS  :  Application Programming Interface.

// APIs are very powerful in order to make your webpages. It is something that every developer needs
// to master, it provides a ton of information to your own page.
// having apis makes it easier for you to connect your webpage to a bigger database and therefore
// make the user to have a better experience and information in your page.

// this function helps you to option APIs your browser can optain
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

// using this function, you will be asked to make your location visible and be able to use
// that data for anything you want in your webpage. For example, when you make a weather Page
// is very important to show your current location so you can have the current weather in the place
// that you are placed.

// Also you can use the Fetch function in order to optain APIs using Javascript
// This is a basic example of using fetch
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

//Here we are fetching a JSON file across the network and printing it to the console
// The simplest use of fetch() takes one argument — the path to the resource you want 
// to fetch — and returns a promise containing the response (a Response object).
// This is just an HTTP response, not the actual JSON. To extract the JSON body content from the 
//response, we use the json() method (defined on the Body mixin, which is implemented by both the 
// Request and Response objects.)

// You can use this data to output to your own layout that you made on your html. It is pretty simple
// to make this happened. The only thing you nned to do is to understand the json file you are calling
// through the fetch() function


// One more thing is to remember is that some APIs will ask you for some credentials in order to access to
// their data

//If you only want to send credentials if the request URL is on the same origin as the calling script, 
// add credentials: 'same-origin'.
// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
});

//To instead ensure browsers don’t include credentials in the request, use credentials: 'omit'.
fetch('https://example.com', {
  credentials: 'omit'
})

// Examples of Uploading JSON data using fetch()
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

//Example of Uploading a file using FormData() and fetch()
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});


