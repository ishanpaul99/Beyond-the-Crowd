/* ================= CHATBOT ================= */

const chatbotMascot =
    document.getElementById("chatbotMascot");

const chatbotBubble =
    document.getElementById("chatbotBubble");

const chatWindow =
    document.getElementById("chatWindow");

const chatClose =
    document.getElementById("chatClose");

const chatInput =
    document.getElementById("chatInput");

const chatSend =
    document.getElementById("chatSend");

const chatMessages =
    document.getElementById("chatMessages");


/* ================= OPEN CHAT ================= */

function openChat() {

    chatWindow.classList.add("active");

    chatbotBubble.style.display = "none";

    chatInput.focus();

}


/* ================= CLOSE CHAT ================= */

function closeChat() {

    chatWindow.classList.remove("active");

}


/* ================= MASCOT ================= */

chatbotMascot.addEventListener(
    "click",
    openChat
);


/* ================= BUBBLE ================= */

chatbotBubble.addEventListener(
    "click",
    openChat
);


/* ================= CLOSE BUTTON ================= */

chatClose.addEventListener(
    "click",
    closeChat
);


/* ================= SEND MESSAGE ================= */

function sendMessage() {

    const message =
        chatInput.value.trim();


    if (message === "") {
        return;
    }


    /* User message */

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "user-message";

    userMessage.textContent =
        message;

    chatMessages.appendChild(
        userMessage
    );


    chatInput.value = "";


    /* Temporary bot response */

    setTimeout(() => {

        const botMessage =
            document.createElement("div");

        botMessage.className =
            "bot-message";

        botMessage.textContent =
            "I'd love to help! Once the AI backend is connected, I'll be able to give you personalised travel recommendations.";

        chatMessages.appendChild(
            botMessage
        );


        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }, 700);


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


/* ================= SEND BUTTON ================= */

chatSend.addEventListener(
    "click",
    sendMessage
);


/* ================= ENTER KEY ================= */

chatInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


/* ================= SPEECH BUBBLE ================= */

setTimeout(() => {

    if (
        !chatWindow.classList.contains("active")
    ) {

        chatbotBubble.style.display =
            "block";

    }

}, 5000);