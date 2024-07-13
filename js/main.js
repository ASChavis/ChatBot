
//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('userInquiry');
var chatContainer = document.getElementById('chatContainer');


function chatBotSendMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-start');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin='10px';
    messageElement.style.padding='5px';
    messageElement.style.backgroundColor='rgb(219, 180, 121)';

    messageElement.innerHTML = '<span>ChatBot: </span>'+
    '<span style='+'margin-top:10px; padding:10px'+'>'+ messageText +'</span>';

    chatContainer.appendChild(messageElement);
}


function sendMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-end');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin='10px';
    messageElement.style.padding='5px';
    messageElement.style.backgroundColor='rgb(228, 137, 17)';

    messageElement.innerHTML = '<span>You: </span>'+
    '<span style='+'margin-top:10px; padding:10px'+'>'+ messageText +'</span>';

messageElement.animate([{easing:'ease-in',opacity:0.4},{opacity:1}],{duration:1000});

    chatContainer.appendChild(messageElement);
}


sendBtn.addEventListener('click', function(e){
    if(textbox.value== ""){
        alert('Please type in message');
    }else{

    let messageText = textbox.value;
    sendMessage(messageText);
    textbox.value='';
    }
    });