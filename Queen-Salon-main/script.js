



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
  
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    login.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

function showAlertAndRedirect() {
 
  alert("Thank you for your subscription");
 
 
  window.location.href ="about.html";
}



const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

const setLightMode = () => {
  body.style.setProperty("--bg-color", "#fff");
  body.style.setProperty("--text-color", "#000");
  body.style.setProperty("--btn-bg-color", "#007bff");
  body.style.setProperty("--btn-text-color", "#fff");
  body.style.setProperty("--btn-hover-bg-color", "#0069d9");
  body.style.setProperty("--btn-hover-text-color", "#fff");
  localStorage.setItem("mode", "light");
};

const setDarkMode = () => {
  body.style.setProperty("--bg-color", "#000");
  body.style.setProperty("--text-color", "#fff");
  body.style.setProperty("--btn-bg-color", "#343a40");
  body.style.setProperty("--btn-text-color", "#fff");
  body.style.setProperty("--btn-hover-bg-color", "#212529");
  body.style.setProperty("--btn-hover-text-color", "#fff");
  localStorage.setItem("mode", "dark");
};

const getMode = () => {
  const mode = localStorage.getItem("mode");
  if (mode === "light") {
    setLightMode();
  } else {
    setDarkMode();
  }
};

modeToggle.addEventListener("click", () => {
  const mode = localStorage.getItem("mode");
  if (mode === "light") {
    setDarkMode();
  } else {
    setLightMode();
  }
});

getMode();



const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
if (name.trim() === "") {
    alert("Please enter the required fields");
    return false;
  } else {
    alert("You have booked");
  }
});
  const name = document.getElementById('name').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;{

  console.log(`Name: ${name}`);
  console.log(`Service: ${service}`);
  console.log(`Date: ${date}`);
  console.log(`Time: ${time}`);


};


function validateForm() {

  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var service = document.getElementById("serviceInput").value;
  var phone = document.getElementById("phoneInput").value;
  var message = document.getElementById("messageInput").value;


 

  if (name.trim() === "") {
    alert("Please enter the required fields");
    return false;
  } else {
    alert("You have booked");
  }
};







let slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



document.getElementById('chat-send-btn').addEventListener('click', function() {
  const chatInput = document.getElementById('chat-input');
  const chatContent = document.getElementById('chat-content');
  const message = document.createElement('p');
  message.textContent = chatInput.value;
  message.classList.add('message', 'user');
  chatInput.value = '';
  chatContent.appendChild(message);
  fetch('https://your-api-url.com/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: chatInput.value })
  })
  .then(response => response.json())
  .then(data => {
    const botMessage = document.createElement('p');
    botMessage.textContent = data.message;
    botMessage.classList.add('message', 'bot');
    chatContent.appendChild(botMessage);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

document.getElementById('chat-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('chat-send-btn').click();
  }
});


$(document).ready(function() {
  function cycleImages() {
    $('.slide').first().appendTo('.slideshow').fadeOut(1000).removeClass('active');
    $('.slide.active').fadeIn(1000).removeClass('active');
    $('.slide:first').addClass('active');
  }

  setInterval(cycleImages, 5000); // Change the duration in milliseconds to match your preference
});


function validateForm() {
  var name = document.getElementById('nameInput').value.trim();
  var email = document.getElementById('emailInput').value.trim();
  var service = document.getElementById('serviceInput').value.trim();
  var phone = document.getElementById('phoneInput').value.trim();
  var message = document.getElementById('messageInput').value.trim();
 
  if (name === '' || email === '' || service === '' || phone === '' || message === '') {
      alert('Please fill in all fields.');
      return false;
  }
 
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }
 
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
  }
 
  return true;
}
 
function showAlertAndRedirect() {
  alert('Thank you for subscribing!');
}

