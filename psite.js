// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })
$(document).ready(function(){
    $('#contact-form').validate({
        errorClass: 'errors',
        rules:{
            namecontact:{
                required:true
            },

            emailcontact:{
                required: true,
                email: true
            },
            messagescontact:{
                required: true,
                minlength: 20
                
            }
        },
        messages:{
            namecontact : {
                required : "Name should not be empty."
            },
            emailcontact:{
                required : "Email should not be empty.",
                email: "Enter your valid email"
            },
            messagescontact:{
                required : "Message should not be empty."
            }
        }
    })
    // $('#new-passsword').blur(function(){

    //     if($(this).val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
    //         $('#lblpass').hide();
    //     }
    //     else{
    //         $('#lblpass').show();
    //     }
    // })

})
