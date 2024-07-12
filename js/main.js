
//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('userInquiry');
var chatContainer = document.getElementById('chatContainer');

chatBotSendMessage("Hi from ChatBot");

function chatBotSendMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-start');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin='10px';
    messageElement.style.padding='5px';

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

    messageElement.innerHTML = '<span>You: </span>'+
    '<span style='+'margin-top:10px; padding:10px'+'>'+ messageText +'</span>';

    chatContainer.appendChild(messageElement);
}


sendBtn.addEventListener('click', function(e){

    let messageText = textbox.value;
    sendMessage(messageText);

    });