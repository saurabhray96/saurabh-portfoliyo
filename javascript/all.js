
var c=0;
document.getElementById("like").addEventListener("click",()=>{
  if(c%2==0)
  document.getElementById("like").style.color="red";
else
document.getElementById("like").style.color="black";
c++;
})

// get the my whatsapp
function openWhatsApp() {
// Replace '1234567890' with the phone number you want to message
var phoneNumber = '9628604067';
// Construct the WhatsApp URL with the phone number
var url = 'https://wa.me/' + phoneNumber;
// Open the WhatsApp URL in a new tab
window.open(url);
}
//click pictur
document.getElementById("linkdn").addEventListener("click",()=>{
window.location.href = 'https://www.linkedin.com/in/saurabh-ray-419786246/';
})
