var modal = document.getElementById("myModal");
var img = document.querySelectorAll(".team-member img");
var modalImg = document.querySelector(".modal-content img");
var memberName = document.getElementById("member-name");
var memberCountry = document.getElementById("member-country");
var memberStatus = document.getElementById("member-status");
var memberDescription1 = document.getElementById("member-description1");
var memberDescription2 = document.getElementById("member-description2");
var memberDescription3 = document.getElementById("member-description3");
var memberDescription4 = document.getElementById("member-description4");
var modalImg = document.querySelector(".modal-content img");
        
        
img.forEach(function(element) {
    element.addEventListener("click", function() {
        modal.style.display = "block";
        modal.classList.add('fade-in');
        modalImg.src = this.src;
        memberName.textContent = this.nextElementSibling.textContent;
        memberStatus.textContent = this.nextElementSibling.nextElementSibling.textContent;
        memberCountry.textContent = this.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        memberDescription1.textContent = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        memberDescription2.textContent = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        memberDescription3.textContent = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        memberDescription4.textContent = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
    });
});

var span = document.getElementsByClassName("close")[0];

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.classList.add('fade-out');
}

span.onclick = function() {
    modal.style.display = "none";    
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

       