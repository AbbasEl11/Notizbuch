//notizen anzeigen lassen

let notesTitle = [];
let notes = [];

let trashNotesTitles = [];
let trashNotes = [];

let archivTitle = [];
let archivNote = [];

// -> wann werden sie angezeigt ?

function renderNotes() {
  // ich muss definieren wo sie anzuzeigen sind

  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  // ich muss definieren wo sie anzuzeigen sind

  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function renderArchivNotes() {
  // ich muss definieren wo sie anzuzeigen sind

  let archivContentRef = document.getElementById("archiv_content");
  archivContentRef.innerHTML = "";

  for (
    let indexArchivNote = 0;
    indexArchivNote < archivNote.length;
    indexArchivNote++
  ) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
}


function saveData() {
  let inputRef = document.getElementById("note_input");
  let inputTitle = document.getElementById("titles_input");

  if (inputRef.value != "") {
    notes.push(inputRef.value);
  }
  if (inputTitle.value != "") {
    notesTitle.push(inputTitle.value);
  }

  saveToLocalStorage();
  renderNotes();

  inputRef.value = "";
  inputTitle.value = "";
}


function deleteAndDisplayNotice(i) {
  if (i >= 0 && i < notes.length) {
    let deletedNote = notes.splice(i, 1)[0];
    let deletedTitle = notesTitle.splice(i, 1)[0];
    trashNotes.push(deletedNote);
    trashNotesTitles.push(deletedTitle);
    saveDeletedNotices();
    saveToLocalStorage();
  }
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function completeDeleteNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  trashNotesTitles.splice(trashNotesTitles, 1);
  saveDeletedNotices();
  renderTrashNotes();
}

function archiveNote(i) {
  if (i >= 0 && i < notes.length) {
    let saveNote = notes.splice(i, 1)[0];
    let saveTitle = notesTitle.splice(i, 1)[0];
    archivNote.push(saveNote);
    archivTitle.push(saveTitle);
    saveDeletedNotices();
    saveToLocalStorage();
    saveArchiveNotes();
    loadArchivNotes();
  }
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function deleteArchivNote(i) {
  if (i >= 0 && i < archivNote.length) {
    let deletedArchivNote = archivNote.splice(i, 1)[0];
    let deletedArchivTitle = archivTitle.splice(i, 1)[0];
    trashNotes.push(deletedArchivNote);
    trashNotesTitles.push(deletedArchivTitle);
    saveDeletedNotices();
    saveToLocalStorage();
    saveArchiveNotes();
    loadArchivNotes();
  }
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function getFromLocalStorage() {
  let storedNotes = JSON.parse(localStorage.getItem("notes"));
  if (storedNotes) {
    notes = storedNotes; // Lade die Notizen ins Array
  }
  let storedTitles = JSON.parse(localStorage.getItem("notesTitle"));
  if (storedTitles) {
    notesTitle = storedTitles; // Lade die Notizen ins Array
  }
}

function loadDeletedNotices() {
  let storedTrashNotesTitles = JSON.parse(
    localStorage.getItem("trashNotesTitles")
  );
  if (storedTrashNotesTitles) {
    trashNotesTitles = storedTrashNotesTitles; // Lade die Notizen ins Array
  }
  let storedTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
  if (storedTrashNotes) {
    trashNotes = storedTrashNotes; // Lade die Notizen ins Array
  }
}

function loadArchivNotes() {
  let storedArchivTitles = JSON.parse(localStorage.getItem("archivTitle"));
  if (storedArchivTitles) {
    archivTitle = storedArchivTitles; // Lade die Notizen ins Array
  }
  let storedArchivNotes = JSON.parse(localStorage.getItem("archivNote"));
  if (storedArchivNotes) {
    archivNote = storedArchivNotes; // Lade die Notizen ins Array
  }
}

//notizen archivieren
