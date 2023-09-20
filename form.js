/* create a function that calls itself to
 show a button on the document
 once the window load*/
 (function(){
    // get the element on your html document
let span = document.querySelector('#wrapper > span')
    let button = document.createElement('button')
    button.textContent = "Show form"
    button.setAttribute('onClick','showForm()')
    span.appendChild(button)
   console.log(span)
}())

let container = document.querySelector('#wrapper')
// container.style.border = '.2rem solid red'
// container.style.backgroundColor = 'blue'
// create a form element and fill it with login details
let formContainer = document.createElement("form")
// let text = "sign In form"
// formContainer.innerHTML = "<h3>" + text + "</h3>"
formContainer.innerHTML = `
                            <div class='formContent'>
                                <h3>Sign In Form</h3>
                                <div class='userDetail'>
                                    <label for='username'>Username:</label>
                                    <input type='text' placeholder='username'>
                                    <label for='password'>Password:</label>
                                    <input type='password' placeholder='enter your passkey'>
                                </div>
                                <div id='formControl'>
                                   <button>Login</button>
                                   <button>Reset</button>
                                </div>
                                <p>Already have an account:<a href="">Sign up</a></p>
                            </div>`

/**
 * create  the function showform 
 * 
 */
function showForm(){
    container.appendChild(formContainer)
}

// correction to the exercise
/**
 * build a sign up form with your script file
 * render to the document
 */
let signIn = document.querySelector('#wrapper > button');
signIn.textContent = 'Sign Up'
signIn.setAttribute('onclick', 'showSignup()');
function showSignup(){
    signIn.setAttribute('class', 'signUpCont')
    let signUpCont = document.createElement('form')
    signUpCont.setAttribute("action", " ")
    signUpCont.setAttribute("method", " ")
    // console.log(signUpCont)
    signUpCont.innerHTML = `<div id="regContent">
                                <fieldset>
                                    <legend>Register Form</legend>
                                    <div id='userDetail'>
                                        <label for='fname'>first name</label>
                                        <input type='text' placeholder='enter your firstname'>
                                        <label for='lname'>last name</label>
                                        <input type='text' placeholder='enter your lastname'>
                                    </div> 
                                    <div id='control'>
                                        <input type='submit' value='register'>
                                        <input type='reset' value='reset'>
                                    </div>
                                </fieldset>

                            </div>`
    
    container.appendChild(signUpCont)
}
// signIn.addEventListener('click', ()=>{
//     alert('hello')
// })
