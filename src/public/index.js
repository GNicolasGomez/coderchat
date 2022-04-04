const socket = io();
let  chatBox = document.getElementById('chatBox');
let user;
let log = document.getElementById('log');

Swal.fire({
    title:"Identifícate",
    input:"text",
    allowOutsideClick:false,
    inputValidator:(value)=>{
        console.log(value)
        return !value && '¡Necesita un nombre de usuario para participar en el chat!'
    }
}).then(result=>{
    user=result.value;
    console.log(value);
});

chatBox.addEventListener('keyup',e=> {
    if(e.key==='Enter'){
        if(chatBox.value.trim().length>0){//Por lo menos envia una letra
            socket.emit('message',{user,message:chatBox.value.trim()})
            chatBox.value="";
        }
    }
});

/* Socket */

socket.on('log',data=> {
    let messages="";
    data.forEach(log => {
        messages=messages + `${log.user} dice: ${log.message} </br>`
    });
    log.innerHTML=messages;
})


// const input = document.getElementById('load');
// input.addEventListener('keyup',e=>{
//     if(e.key==='Enter'){
//         // console.log("Hola desde el Index");
//         socket.emit('keyboard',input.value);
//     }
// })

// socket.on('log',data => {
//     if(text.textContent!=null){
//         let text = document.getElementById('text');
//         let messages = data.message;
//         text.innerHTML= messages;
//     }
// })