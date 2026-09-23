const uploadedSongUrl = "songs/ssstik.io_1790198947916.mp3";

const letters = {
    "miss-you": {
        "title": "Open When <br> You Miss Me",
        message:
            "If you miss me, just remember that I'm missing you too. No matter how far apart we are, you're always in my heart and on my mind. I can't wait until we're together again, so I can hold you close and make up for all the moments we've missed.",
        song: {
            title: "About You",
            artist: "The 1975"
        }
    },

    "bad-day": {
        "title": "Open When <br> You're Having A Bad Day",
        message:
            "I know today might be a difficult day, but please remember that you don't have to face everything alone. I'm always here for you, even when I can't be there physically. Take a breath, rest if you need to, and remember how loved you are.",
        song: {
            title: "Bad Day Song",
            artist: "Uploaded"
        }
    },

    "need-a-hug": {
        "title": "Open When <br> You Need A Hug",
        message:
            "If you need a hug right now, close your eyes and imagine my arms wrapped tightly around you. I wish I could be there to hold you, comfort you, and remind you that everything will be okay.",
        song: {
            title: "Warm Arms",
            artist: "Uploaded"
        }
    },

    "cant-sleep": {
        "title": "Open When <br> You Can't Sleep",
        message:
            "If you're having trouble sleeping, try to relax and let go of any worries. Close your eyes, take deep breaths, and imagine a peaceful place where you feel safe and calm. Remember that I'm thinking of you and sending you love and positive energy to help you rest.",
        song: {
            title: "Moonlit Calm",
            artist: "Uploaded"
        }
    },

    "love-you": {
        "title": "Open When <br> You Need To Know I Love You",
        message:
            "I love you more than words can express. You are the most important person in my life, and I am grateful for every moment we share together. No matter what happens, please remember that my love for you is unwavering and eternal.",
        song: {
            title: "Forever Yours",
            artist: "Uploaded"
        }
    },

    "thinking-of-you": {
        "title": "Open When <br> You're Thinking Of Me",
        message:
            "If you're thinking of me, know that I'm thinking of you too. You are always in my heart and on my mind, and I cherish every memory we've made together. I can't wait until we can create more memories and share more moments together.",
        song: {
            title: "You Are My Favorite Thought",
            artist: "Uploaded"
        }
    }
};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];
const audio = document.getElementById("letter-audio");
const songMeta = document.getElementById("song-meta");
const muteToggle = document.getElementById("mute-toggle");

if (muteToggle && audio) {
    muteToggle.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteToggle.textContent = audio.muted ? "🔇 Unmute" : "🔊 Mute";
    });
}

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;

    if (audio && songMeta && letter.song) {
        audio.src = uploadedSongUrl;
        audio.autoplay = true;
        audio.load();
        audio.play().catch(() => {
            console.log("Autoplay was blocked by the browser.");
        });
        songMeta.textContent = `${letter.song.title} • ${letter.song.artist}`;
    }
} else {
    document.getElementById("letter-title").textContent = "Letter not found.";
    document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";

    if (audio && songMeta) {
        audio.style.display = "none";
        songMeta.textContent = "This letter isn't available yet.";
    }
}

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = "images/letter-final.png";
    letterText.classList.remove("hidden");
}, 1200);