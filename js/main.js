let slots = document.querySelectorAll(".slot"),
    discs = document.querySelectorAll(".disc"),
    playButton = document.querySelector("#play-button"),
    pauseButton = document.querySelector("#pause-button"),
    reset = document.querySelector("#reset"),
    helpButton = document.querySelector("#help-button"),
    draggedDisc;

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
        console.log("dropped the piece")
        if (this.children.length == 0) {
            e.target.appendChild(draggedDisc);
        }
    }

    // Audio Controls & Help Functions

    function help () {
        console.log("Show Help");
    }

    function handlePlay() {
        console.log("Resume Music");
    }

    function handlePause() {
        console.log("Pause Music");
    }

    function handleReset() {
        console.log("Reset Music Mixer");
    }

    // Drag & Drop Events

    discs.forEach(disc => disc.addEventListener("dragstart", handleStartDrag));

    slots.forEach(slot => slot.addEventListener("dragover", handleDragOver));
    slots.forEach(slot => slot.addEventListener("drop", handleDrop));

    //Audio Controls & Help Events

    helpButton.addEventListener("click", help);
    playButton.addEventListener("click", handlePlay);
    pauseButton.addEventListener("click", handlePause);
    reset.addEventListener("click", handleReset);



 