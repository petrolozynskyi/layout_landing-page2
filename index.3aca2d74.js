function e(e){var t=document.body;e.stopPropagation(),n.classList.toggle("show"),t.classList.add("body-no-scroll")}function t(){document.body.classList.remove("body-no-scroll"),n.classList.remove("show")}document.addEventListener("DOMContentLoaded",function(){(n=document.getElementById("modalMenu")).addEventListener("click",t),document.querySelector(".menu__opener").addEventListener("click",e)});// Get references to form elements
var n,o=document.getElementById("sendButton"),l=document.getElementById("contactForm"),d=document.getElementById("username"),r=document.getElementById("email"),a=document.getElementById("message");// Add event listener to the "Send" button
o.addEventListener("click",function(e){if(""===d.value||""===r.value||""===a.value)alert("Please fill in all required fields before sending."),e.preventDefault();else{var t,n,o;t=document.getElementById("username"),n=document.getElementById("email"),o=document.getElementById("message"),// Clear the form fields
t.value="",n.value="",o.value=""}}),// Add event listener to the form submission
l.addEventListener("submit",function(e){// Prevent the default form submission behavior
e.preventDefault()}),// Add event listener to the "Send" button
o.addEventListener("click",function(e){// Prevent the default form submission behavior
e.preventDefault(),// Scroll to the form section
l.scrollIntoView({behavior:"smooth"})}),document.addEventListener("DOMContentLoaded",function(){// Smooth scrolling for internal links
var e=document.querySelectorAll('a[href^="#"]'),t=!0,n=!1,o=void 0;try{for(var l,d=e[Symbol.iterator]();!(t=(l=d.next()).done);t=!0)l.value.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(this.getAttribute("href"));if(t){var n=t.getBoundingClientRect().top+window.pageYOffset+-100;window.scrollTo({top:n,behavior:"smooth"})}})}catch(e){n=!0,o=e}finally{try{t||null==d.return||d.return()}finally{if(n)throw o}}});//# sourceMappingURL=index.3aca2d74.js.map

//# sourceMappingURL=index.3aca2d74.js.map
