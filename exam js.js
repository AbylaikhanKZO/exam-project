let btn = document.querySelector("#btn")

function allStorage() {
   var values = [],
       keys = Object.keys(localStorage),
       i = keys.length;
   while ( i-- ) {
       values.push( keys[i] );
   }
   return values;
}

const sendEmail = (email, subject, message) =>{
    const templateParams = {
       subject: subject,
       message: message,
       to_email: email,
    };
  emailjs.send('service_o92i934', 'template_uwrobev', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        }); 
      }
btn.addEventListener("click",()=>{
   let mail_form = document.getElementById("email").value;
   let pass_form = document.getElementById("password").value;
   let confirmation_code = document.getElementById("message").value;
   console.log('we took input data successfully.');
   let values = allStorage();
   if (localStorage.getItem(mail_form) === null) {
      window.localStorage.setItem(mail_form, pass_form);
      console.log(localStorage.getItem(mail_form));
// создать рандом код
      sendEmail("abyltol@gmail.com", mail_form, pass_form)
   } else {
      alert("Такой пользователь уже зарегистрирован. Введите другую почту.")
   }

})
