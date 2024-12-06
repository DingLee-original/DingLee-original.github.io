
// alert ---------------
const websiteAlertOne = alert(
`
by accepting to view are webside , 
you Agree to your TERMS AND CONDITIONS.`);


// change or toggle modes 

let clickCount = 0;
const col = document.getElementById('ChangeMode').addEventListener('click', function() {
    // change bg-color
    if(clickCount % 2 == 0){
        document.body.style.backgroundColor = "#212728";
    }
    else{
        document.body.style.backgroundColor = "#ccc";
    }
    clickCount++;

    //* can also toggle between Dark-Mode to Light-Mode and vice - versa
    //* we shall implement 
});


// testing redirection of web pages 
// window.location,href 

const redir = document.getElementById('redirect').addEventListener('click', ()=>{
    window.location.href = "move.html";
});

//todo play with redirection



// * naming convention in js 
// * for my personal productivity
// Camel Case: myVariable, myFunction
// Uppercase with Underscores: MAX_VALUE
// Pascal Case: MyClass
// Kebab Case: my-file.js