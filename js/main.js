let slots = document.querySelectorAll(".slot"),
    discs = document.querySelectorAll(".disc"),
    playButton = document.querySelector("#play-def"),
    pauseButton = document.querySelector("#pause-def"),
    reset = document.querySelector("#reset-def"),
    helpButton = document.querySelector("#help-button"),
    closeButton = document.querySelector("#close"),
    helpSection = document.querySelector("#help-section"),
    draggedDisc,
    audio = new Audio();

// Drag & Drop Functions

function handleStartDrag() {
    console.log("dragged", this, "piece");
    draggedDisc = this;
}

function handleDragOver(e) {
    console.log ("dragged over the disc")
    e.preventDefault();
}

function handleDrop(e) {
    console.log("dropped the piece");
    if (this.children.length == 0) {
        // Append the dropped disc to the slot
        e.target.appendChild(draggedDisc);

        // If audio is not playing, start playing the audio file
        if (audio.paused) {
            audio.src = draggedDisc.dataset.audio;
            audio.loop = true; // Set loop to true
            audio.play();
        } 
        // If audio is already playing, create a new audio element and start playing the new audio file
        else {
            const newAudio = new Audio(draggedDisc.dataset.audio);
            newAudio.loop = true; // Set loop to true
            newAudio.play();
        }
    }
}



// Help Section

function close() {
    console.log("closed the help option");
    helpSection.style.display = "none";
}

function reOpen() {
    console.log("reopened help section");
    helpSection.style.display = "grid";
}

// Audio Controls & Help Functions

function help () {
    console.log("Show Help");
}

function handlePlay() {
    if (audio.paused) {
        console.log("Resume Music");
        audio.play(); // Resume playing the music
    }
}

function handlePause() {
    if (!audio.paused) {
        console.log("Pause Music");
        audio.pause(); // Pause the music
    }
}

function handleReset() {
    console.log("Reset Music Mixer");
    audio.currentTime = 0;  // Reset the current time of the music to 0
}

// Drag & Drop Events
discs.forEach(disc => disc.addEventListener("dragstart", handleStartDrag));

slots.forEach(slot => slot.addEventListener("dragover", handleDragOver));
slots.forEach(slot => slot.addEventListener("drop", handleDrop));

//Help Section
closeButton.addEventListener("click", close);
helpButton.addEventListener("click", reOpen);

//Audio Controls & Help Events  
playButton.addEventListener("click", handlePlay);
pauseButton.addEventListener("click", handlePause);
reset.addEventListener("click", handleReset);

// Get the drop zone element
const dropZone = document.querySelector('#disc-slots');

// Add the drop event listener to the drop zone
dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    console.log('dropped...');

    // Get the dropped element and its data attribute
    const droppedDisc = draggedDisc;
    const audioPath = droppedDisc.getAttribute('data-audio');

    // Set the source of the audio element to the data-audio attribute of the dropped disc
    audio.src = audioPath;

    // Play the audio file
    audio.play();
});