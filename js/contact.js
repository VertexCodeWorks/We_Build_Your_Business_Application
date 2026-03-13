const contactForm = document.getElementById("contactForm");
const serviceSelect = document.getElementById("service");
const otherServiceGroup = document.getElementById("otherServiceGroup");

serviceSelect.addEventListener("change", () => {
  otherServiceGroup.style.display = serviceSelect.value === "other" ? "block" : "none";
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = serviceSelect.value;
  const other = document.getElementById("otherService").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name
  if(!name){ valid=false; document.getElementById("nameError").textContent="Name is required"; }

  // Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email){ valid=false; document.getElementById("emailError").textContent="Email is required";}
  else if(!email.match(emailPattern)){ valid=false; document.getElementById("emailError").textContent="Invalid email format"; }

  // Phone
  const phonePattern = /^[0-9]{10}$/;
  if(!phone){ valid=false; document.getElementById("phoneError").textContent="Phone is required";}
  else if(!phone.match(phonePattern)){ valid=false; document.getElementById("phoneError").textContent="Enter valid 10-digit phone number";}

  // Service
  if(!service){ valid=false; document.getElementById("serviceError").textContent="Please select a service"; }
  if(service==="other" && !other){ valid=false; document.getElementById("otherError").textContent="Specify requirements"; }

  if(valid){
    // Prepare WhatsApp message
    const serviceText = service==="other" ? other : serviceSelect.options[serviceSelect.selectedIndex].text;
    const waMessage = `Hello Ashok,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(serviceText)}%0AMessage: ${encodeURIComponent(message)}`;
    const whatsappNumber = "918106630124";

    window.open(`https://wa.me/${whatsappNumber}?text=${waMessage}`, "_blank");

    contactForm.reset();
    otherServiceGroup.style.display = "none";
  }
});
