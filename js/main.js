
//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('userInquiry');
var chatContainer = document.getElementById('chatContainer');

var user = {message:"", counter:0};
var httpRequest =

chatBotSendMessage("Please choose an option")

initializeOptions();

var arrayOfPossibleMessages = [
    {"message":"how are you?", "response":"I'm great!"},
    {"message":"hi", "response":"Hi!"},
    {"message":"who are you?", "response":"I'm your assistant"},

];

var questionsToAsk = [
    {"question":"What is your name?","answer":""},
    {"question":"How old are you?","answer":""},
    {"question":"What is your job?","answer":""},
    {"question":"What is your name?","answer":""},
    {"question":"How old are you?","answer":""},
    {"question":"What is your job?","answer":""}
];


function askQuestion(){
    if(questionsToAsk.length > user.counter){
            setTimeout(function(){
                chatBotSendMessage(questionsToAsk[user.counter].question);
                user.counter++;
            },1000);

    console.log(questionsToAsk[user.counter-1]);
    };
};


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

        //scroll to last message
        chatContainer.scrollTop = chatContainer.scrollHeight;
};


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


    //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;

};

function handleWeatherResponse(){
    if(httpRequest.readystate === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
              console.log(httpRequest.responseText);
        }else{

            alert("There was an unexpected error.");
        };
    };

};

function getWeatherRequest(lat,long){

    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = handleWeatherResponse
    httpRequest.open("GET",'https://api.weatherapi.com/v1/forecast.json?&key=be43167956334322af8222757230609&q=' + parseInt(lat) + ',' + parseInt(long));
    httpRequest.send();

};

function getLocationAndWeather(){
    navigator.geolocation.getCurrentPosition((pos)=>{
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;

        getWeatherRequest(lat,long);

    }, (err)=>{
        console.log(err);

    });

};

function assistantResponse(messageText){

        var userChoice = parseInt(messageText.trim());

        switch(userChoice){

            case 1:
                //get weather
                //alert("you chose 1");
                //get location then weather
                getLocationAndWeather();
                    break;
            case 2:
                //get sports
                alert("you chose 2");
                    break;
                 
            case 3:
                //general news
                alert("you chose 3");
                    break;
             default:
                alert("default");
        }
};

function initializeOptions(){
    let options = [
        {number:1,choice:"Weather"},
        {number:2,choice:"Sports"},
        {number:3,choice:"News"}
    ];

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-start');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin='10px';
    messageElement.style.padding='5px';
    messageElement.style.backgroundColor='rgb(219, 180, 121)';

    for(let i =0; i<options.length; i++){
    messageElement.innerHTML += "<br>" +
    '<span style='+'margin-top:10px; padding:10px'+'>'+ options[i].number + " " + options[i].choice +'</span>';
    };

    messageElement.animate([{easing:'ease-in',opacity:0.4},{opacity:1}],{duration:1000});
    chatContainer.appendChild(messageElement);

};

sendBtn.addEventListener('click', function(e){
    if(textbox.value== ""){
        alert('Please type in message');
    }else{

        let messageText = textbox.value;
        user.message = messageText.toLowerCase();
        sendMessage(messageText);
        textbox.value='';

       // questionsToAsk[user.counter-1].answer = user.message;

        // askQuestion();
        // processMessage();

        assistantResponse(messageText);

    };
    });

function processMessage(){

        if(user.message.length > 5){
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
        } else if (user.message == "how" || user.message == "who") {

            setTimeout(function(){
                chatBotSendMessage("?");
               },1000);
        } else {

            setTimeout(function(){
                chatBotSendMessage("Please send me a complete sentence");
               },1000);
        
        }  

    };