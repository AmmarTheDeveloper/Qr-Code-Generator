let api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let button = document.querySelector( 'button' );
let img = document.querySelector( 'img' );
let imgContainer = document.querySelector( '.img' );
const userName = document.querySelector( '#name' )
const userNumber = document.querySelector( '#number' )
const RollNo = document.querySelector("#roll-no")
const userAge = document.querySelector( '#age' )
const ilaqa = document.querySelector("#ilaqa")

button.onclick = () => {

    if ( userName.value.length < 3 || userNumber.value.length != 10 || userAge.value.length == 0 || RollNo.value.length == 0 || ilaqa.value.length == 0) {
        alert( 'Please enter all fields properly' )
        return
    }

    let userValues = `{RollNo : "${RollNo.value}" , Participant:"${ userName.value }", Contact : "${ userNumber.value }" , ilaqa : "${ilaqa.value}" , Registeration_No:"${ userAge.value }"}`

    let qrCode = `${ api }${ userValues }`;
    img.src = qrCode;
    imgContainer.classList.add( 'active' );

}
