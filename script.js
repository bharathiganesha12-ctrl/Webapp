
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    const notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        const noteElement = document.createElement("div");
        noteElement.className = "note";

        noteElement.innerHTML = `
            <span>${escapeHTML(note)}</span>
            <button class="delete-btn" onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        notesList.appendChild(noteElement);
    });
}

function addNote() {
    const input = document.getElementById("noteInput");
    const note = input.value.trim();

    if (note === "") {
        alert("Please enter a note.");
        return;
    }

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";

    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

displayNotes();

