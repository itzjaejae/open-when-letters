const letters = {
    "miss-you": {
        title: "Open When <br> You Miss Me",
        message:
            "I miss you too. I wish I could be there with you right now, but until then, just know that I'm thinking about you and sending you all my love.",
        song: {
            title: "Alexandra",
            artist: "Reality Club",
            src: "songs/alexandra - reality club.mp3"
        }
    },

    "bad-day": {
        title: "Open When<br> You're Having A Bad Day",
        message:
            "I'm sorry you're having a rough day. I hope this letter brings a smile to your face and reminds you that I'm here for you, no matter what.",
        song: {
            title: "Roxanne",
            artist: "Chase Atlantic",
            src: "songs/Roxanne - Chase Atlantic.mp3"
        }
    },

    "need-a-hug": {
        title: "Open When <br> You Need A Hug",
        message:
            "I wish I could be there to give you a big hug right now. Until then, consider this letter a virtual hug from me to you.",
        song: {
            title: "Add Up My Love",
            artist: "Clairo",
            src: "songs/add up my love - clairo.mp3"
        }
    },

    "cant-sleep": {
        title: "Open When <br> You Can't Sleep",
        message:
            "I know how it feels to lie awake at night, thinking about everything. I hope this letter helps you feel a little more at ease and reminds you that I'm here for you.",
        song: {
            title: "It's Not Living (If It's Not With You)",
            artist: "The 1975",
            src: "songs/it's not living if it's not with you - the 1975.mp3"
        }
    },

    "love-you": {
        title: "Open When <br> You Need To Know I Love You",
        message:
            "I love you more than words can express. I hope this letter reminds you of how much you mean to me and how grateful I am to have you in my life.",
        song: {
            title: "Mirrors",
            artist: "Justin Timberlake",
            src: "songs/mirrors - justin timberlake.mp3"
        }
    },

    "thinking-of-you": {
        title: "Open When <br> You're Thinking Of Me",
        message:
            "I'm thinking of you too. I hope this letter brings a smile to your face and reminds you that I'm always here for you, no matter what.",
        song: {
            title: "Shape of My Heart",
            artist: "Backstreet Boys",
            src: "songs/shape of my heart - backstreet boys.mp3"
        }
    }
};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];
const audio = document.getElementById("letter-audio");
const muteToggle = document.getElementById("mute-toggle");
const songMeta = document.getElementById("song-meta");

if (muteToggle && audio) {
    muteToggle.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteToggle.textContent = audio.muted ? "🔇 Unmute" : "🔊 Mute";
    });
}

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;

    if (audio && letter.song && letter.song.src) {
        audio.src = letter.song.src;
        audio.muted = false;
        audio.autoplay = true;
        audio.load();

        audio.play().catch(() => {
            console.log("Autoplay was blocked; user can press play manually.");
        });

        if (songMeta) {
            songMeta.textContent = `${letter.song.title} • ${letter.song.artist}`;
        }
    }
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

function openLetter(letterKey) {
    const selectedLetter = letters[letterKey];

    if (selectedLetter && selectedLetter.song && selectedLetter.song.src) {
        const audio = new Audio(selectedLetter.song.src);
        audio.play().catch(error => {
            console.log("Audio play error:", error);
        });
    }
}