

// my array of strings 
let message = ["Initializing Hacking", "Reading your Files", "Password files Detected"
    , "Sending all password and personal files to server", "Cleaning up"
]

    // random function
    // later

    // creaating a wrapper over the entire stuff
    // callback 
    // window.onload = () => {


    // (() => {

    
let cout = 0;

let outter = setInterval(() => {

            // message display innerhtml vs append
            // new para
            const newParagraph = document.createElement('p');
            newParagraph.textContent = (() => {
                return message[Math.floor(Math.random() * message.length)];
            })() ;

            const divCon = document.getElementById('message');
            // more robust code
            if (divCon) {
                console.log('i exist');
                divCon.append(newParagraph);
            }
            else {
                console.log('i dont exist');
            }

            if(cout++ > 6){
                clearInterval(outter);
            }


        }, 5400);
    // })();

        

    let count = 0;

    const dot = setInterval(() => {
        // doted world
        // let arr = ['.' ,'..', '...' ];

        if(count++ < 3){
            // do nothing 
        }
        else{

        const divCon = document.getElementById('message');
        divCon.innerText = divCon.innerText + '.';
        // }
        // else{
            // clearInterval(dot);
            // console.log('cleared');

        }

    } , 1799)

    // clear dots 

    setTimeout(()=>{
        clearInterval(dot);
    } , 37779 );

// };