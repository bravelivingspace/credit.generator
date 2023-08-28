const rewards = [
    "I am proud of my dedication and the progress I'm making.",
    "You're on a remarkable journey of self-improvement and growth.",
    "My commitment to bettering myself is commendable, and I deserve recognition for it.",
    "My consistent efforts are shaping a healthier me, and that's something to celebrate.",
    "I'm building habits that contribute to my overall well-being, and I'm proud of my commitment.",
    "I'm giving myself credit for my consistency, which is shaping my brighter future.",
    "I am proud of the choices I'm making, as they reflect my commitment to change.",
    "I'm acknowledging that I'm creating a healthier reality with every decision.",
    "I am celebrating my determination, which is turning challenges into triumphs.",
    "I'm recognizing the steps I'm taking to create a life of well-being and joy.",
    "I am giving myself credit for the commitment I'm showing to my own well-being.",
    "I'm proud of the journey I'm on, and I'm celebrating my growth along the way.",
];

const generateButton = document.getElementById("generateButton");
const creditDisplay = document.getElementById("creditDisplay");

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * rewards.length);
    creditDisplay.textContent = rewards[randomIndex];
});
