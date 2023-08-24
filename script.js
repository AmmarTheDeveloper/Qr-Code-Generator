let api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let button = document.querySelector( 'button' );
let img = document.querySelector( 'img' );
let imgContainer = document.querySelector( '.img' );
const userName = document.querySelector( '#name' )
const userNumber = document.querySelector( '#number' )
const userAge = document.querySelector( '#age' )

button.onclick = () => {

    if ( userName.value.length < 3 || userNumber.value.length != 10 || userAge.value.length == 0 ) {
        alert( 'Please enter all fields properly' )
        return
    }

    let userValues = `{username:"${ userName.value }",usernumber : "${ userNumber.value }" , userage:"${ userAge.value }"}`

    let qrCode = `${ api }${ userValues }`;
    img.src = qrCode;
    imgContainer.classList.add( 'active' );

}