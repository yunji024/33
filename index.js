const chatLog=document.getElementById('chat-log'),
userInput=document.getElementById('user-input'),
sendButton=document.getElementById('send-button'),
buttonIcon=document.getElementById('button-icon'),
info=document.querySelector('.info');

sendButton.addEventListener('click',sendMessage);

function sendMessage(){
    const message=userInput.value.trim();
    
    if(message===''){
        return
    }
    else{
        appendMessage('user',message);
        setTimeout(()=>{
            appendMessage('bot','Made By Yunji\n')
            buttonIcon.classList.add('fa-solid','fa-paper-plane');
            buttonIcon.classList.remove('fas','fa-spinner','fa-pulse');
        },1000);
        return
    }
}

function appendMessage(sender,message){
    info.style.display='none';
    buttonIcon.classList.remove('fa-solid','fa-paper-plane');
    buttonIcon.classList.add('fas','fa-spinner','fa-pulse');

    const chatElement=document.createElement('div');
    const messageElement=document.createElement('div');
    const iconElement=document.createElement('div');
    const icon=document.createElement('i');

    chatElement.classList.add('chat-box');
    iconElement.classList.add('icon');
    messageElement.classList.add(sender);
    messageElement.innerText=message;

    if(sender=='user'){
        icon.classList.add('fa-regular','fa-user');
        iconElement.setAttribute('id','user-icon');
    }
    else{
        icon.classList.add('fa-solid','fa-robot');
        iconElement.setAttribute('id','bot-icon');
    }
    iconElement.appendChild(icon);
    chatElement.appendChild(iconElement);
    chatElement.appendChild(messageElement);
    chatLog.appendChild(chatElement);
}