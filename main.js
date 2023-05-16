debugger
let usuario, password, saldo;
usuario = prompt("ingrese su usuario");
password = parseInt(prompt("ingrese la contraseña"));
saldo = 3500;
const usuarioCorrecto = "valentina23";
const passwordCorrecto = 112233;

console.log(usuario, password, saldo);

if (usuario === usuarioCorrecto && password === passwordCorrecto){
    alert("ingreso exitoso")
    document.write(`Valentina, tiene ${saldo} de saldo disponible`);}

else if (usuario != usuarioCorrecto || password != passwordCorrecto){
    alert("usuario o clave incorrecta. Intente de nuevo. 3 intentos disponibles")
    usuario = prompt("ingrese su usuario");
    password = parseInt(prompt("ingrese la contraseña"));
    if (usuario === usuarioCorrecto && password === passwordCorrecto){
        alert("ingreso exitoso")
        document.write(`Valentina, tiene ${saldo} de saldo disponible`);}
    
    else if (usuario != usuarioCorrecto || password != passwordCorrecto){
        alert("usuario o clave incorrecta. Intente de nuevo. 2 intentos disponibles")
        usuario = prompt("ingrese su usuario");
        password = parseInt(prompt("ingrese la contraseña"));
        if (usuario === usuarioCorrecto && password === passwordCorrecto){
            alert("ingreso exitoso")
            document.write(`Valentina, tiene ${saldo} de saldo disponible`);}
        
        else if (usuario != usuarioCorrecto || password != passwordCorrecto){
            alert("usuario o clave incorrecta. Intente de nuevo. 1 intentos disponibles")
            usuario = prompt("ingrese su usuario");
            password = parseInt(prompt("ingrese la contraseña"));
            if (usuario === usuarioCorrecto && password === passwordCorrecto){
                alert("ingreso exitoso")
                document.write(`Valentina, tiene ${saldo} de saldo disponible`);}
            
            else if (usuario != usuarioCorrecto || password != passwordCorrecto){
                alert("máximo de intentos agotado. Su cuenta está bloqueada.")}
        }
    }
}

// else if (usuario != usuarioCorrecto || password != passwordCorrecto){
//     alert("usuario o clave incorrecta. Intente de nuevo. 2 intentos disponibles")
//     usuario = prompt("ingrese su usuario");
//     password = parseInt(prompt("ingrese la contraseña"));}
    
// else if (usuario != usuarioCorrecto || password != passwordCorrecto){
//     alert("usuario o clave incorrecta. Intente de nuevo. 1 intentos disponibles")
//     usuario = prompt("ingrese su usuario");
//     password = parseInt(prompt("ingrese la contraseña"));}

// else {
//     alert("máximo de intentos agotado. Su cuenta está bloqueada.");}