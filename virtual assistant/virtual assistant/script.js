let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice');

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let date = new Date();
    let hour = date.getHours();
    // let wish;
    if (hour > 0 && hour < 12) {
        // wish = "Good Morning";
        speak("Good Morning sir");
    } else if (hour >= 12 && hour < 18) {
        // wish = "Good Afternoon";
        speak("Good Afternoon sir");
    } else {
        // wish = "Good Evening";
        speak("Good Evening sir");
    }
    // return wish; 
}
window.addEventListener('load', () => {
    wishMe();
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
   takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click", ()=>{ 
    recognition.start(); 
    btn.style.display = "none";
    voice.style.display = "block";
})

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")|| message.toLowerCase().includes("hey")|| message.toLowerCase().includes("hola")) {
        speak("Hello sir, what can I help you with?");
    }
    else if(message.toLowerCase().includes("how are you")){
        speak("I am fine sir, how can I help you?");
    }
    else if(message.toLowerCase().includes("what is your name")){
        speak("I am your virtual assistant named shifra sir");
    }
    else if(message.toLowerCase().includes("who are you")){
        speak("I am your virtual assistant, created by rohith");
    }
    else if(message.toLowerCase().includes("who created you.")){
        speak("I am your virtual assistantt, created by rohith");
    }
    else if(message.toLowerCase().includes("open youtube")){
        window.open("https://www.youtube.com");
        speak("opening youtube");
    }
    else if(message.toLowerCase().includes("open google")){
        window.open("https://www.google.com/");
        speak("opening google");
    }
    else if(message.toLowerCase().includes("open linkedin")){
        window.open("https://www.linkedin.com/in/rohithsai-9ab356256/");
        speak("opening linkedin");
    }
    else if (message.toLowerCase().includes("open calculator")) {
        speak("opening calculator");
        window.open("calculator://");
    }
    else if (message.toLowerCase().includes("open whatsapp")) {
        speak("opening wahtsapp");
        window.open("whatsapp://");
    }
    else if(message.toLowerCase().includes("time")){
        let time = new Date().toLocaleString(undefined, {hour: 'numeric', minute: 'numeric'});
        speak("The current time is " + time);
    }
    else if(message.toLowerCase().includes("date")){
        let date = new Date().toLocaleString(undefined, {day: 'numeric', month: 'numeric', year: 'numeric'});
        speak("The current date is " + date);
    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("shifra", "") || message.replace("shipra", "") || message.replace("shukla", "") 
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("shifra", "") || message.replace("shipra", "") || message.replace("shukla", "")}`, "_blank");
    }
}
