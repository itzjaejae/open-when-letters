const letters = {
    "miss-you": {
        "title": "Open When <br> You Miss Me",
        message:
            "If you miss me, just remember that I'm missing you too. No matter how far apart we are, you're always in my heart and on my mind. I can't wait until we're together again, so I can hold you close and make up for all the moments we've missed."
    },

    "bad-day": {
        "title": "Open When <br> You're Having A Bad Day",
        message:
            "I know today might be a difficult day, but please remember that you don't have to face everything alone. I'm always here for you, even when I can't be there physically. Take a breath, rest if you need to, and remember how loved you are."
    },

    "need-a-hug": {
        "title": "Open When <br> You Need A Hug",
        message:
            "If you need a hug right now, close your eyes and imagine my arms wrapped tightly around you. I wish I could be there to hold you, comfort you, and remind you that everything will be okay."
    },

    "cant-sleep": {
        "title": "Open When <br> You Can't Sleep",
        message:
            "If you're having trouble sleeping, try to relax and let go of any worries. Close your eyes, take deep breaths, and imagine a peaceful place where you feel safe and calm. Remember that I'm thinking of you and sending you love and positive energy to help you rest."
    },

    "love-you": {
        "title": "Open When <br> You Need To Know I Love You",
        message:
            "I love you more than words can express. You are the most important person in my life, and I am grateful for every moment we share together. No matter what happens, please remember that my love for you is unwavering and eternal."
    },

    "thinking-of-you": {
        "title": "Open When <br> You're Thinking Of Me",
        message:
            "If you're thinking of me, know that I'm thinking of you too. You are always in my heart and on my mind, and I cherish every memory we've made together. I can't wait until we can create more memories and share more moments together."
    }
};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;
} else {
     document.getElementById("letter-title").textContent = "Letter not found.";
    document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";
}

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = "images/letter-final.png";
    letterText.classList.remove("hidden");
}, 1200);