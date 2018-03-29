var contactsBtn = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal");
  
contactsBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });