
//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('userInquiry');
var chatContainer = document.getElementById('chatContainer');

var user = {message:""};

var arrayOfPossibleMessages = [
    {"message":"how are you?", "response":"I'm great!"},
    {"message":"hi", "response":"Hi!"},
    {"message":"who are you?", "response":"I'm your assistant"},

];

setTimeout(function(){
    chatBotSendMessage('Hi, What is your name?');
},1000);


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

    messageElement.animate([{easing:'ease-in',opacity:0.4},{opacity:1}],{duration:1000});

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
    user.message = messageText.toLowerCase();
    sendMessage(messageText);
    textbox.value='';

    processMessage();

    }
    });

    function processMessage(){
        //array of results
       var result = arrayOfPossibleMessages.filter(val=> val.message.includes(user.message));

       if(result.length > 0){
            var response = result[0].response;

             setTimeout(function(){
                 chatBotSendMessage(response);
                },1000);
    } else {

        setTimeout(function(){
            chatBotSendMessage("I don't understand.");
           },1000);
    }
       

    };