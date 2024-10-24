let allNotes = {
  notesTitles: [],
  notes: [],
  trashNotesTitles: [],
  trashNotes: [],
  archivNoteTitles: [],
  archivNote: [],
};

function moveNote(indexNote, startKey, destinationKey) {
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);

  let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
  allNotes[destinationKey + "Titles"].push(notesTitle[0]);

  saveToLocalStorage();
  saveDeletedNotices();
  saveArchiveNotes();

  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function renderArchivNotes() {
  let archivContentRef = document.getElementById("archiv_content");
  archivContentRef.innerHTML = "";

  for (
    let indexArchivNote = 0;
    indexArchivNote < allNotes.archivNote.length;
    indexArchivNote++
  ) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
}

function addNote() {
  let inputRef = document.getElementById("note_input");
  let inputTitle = document.getElementById("titles_input");
  let noteInput = inputRef.value;
  let noteTitle = inputTitle.value;

  if (noteInput == "" || noteTitle == "") {
  }

  allNotes.notes.push(noteInput);
  allNotes.notesTitles.push(noteTitle);

  saveToLocalStorage();
  renderNotes();

  inputRef.value = "";
  inputTitle.value = "";
}

function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  renderNotes();
  saveDeletedNotices();
  renderTrashNotes();
}

function getFromLocalStorage() {
  let storedNotes = JSON.parse(localStorage.getItem("notes"));
  if (storedNotes) {
    allNotes.notes = storedNotes;
  }
  let storedTitles = JSON.parse(localStorage.getItem("notesTitles"));
  if (storedTitles) {
    allNotes.notesTitles = storedTitles;
  }
}

function loadDeletedNotices() {
  let storedTrashNotesTitles = JSON.parse(
    localStorage.getItem("trashNotesTitles")
  );
  if (storedTrashNotesTitles) {
    allNotes.trashNotesTitles = storedTrashNotesTitles;
  }
  let storedTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
  if (storedTrashNotes) {
    allNotes.trashNotes = storedTrashNotes;
  }
}

function loadArchivNotes() {
  let storedArchivTitles = JSON.parse(localStorage.getItem("archivNoteTitles"));
  if (storedArchivTitles) {
    allNotes.archivNoteTitles = storedArchivTitles;
  }
  let storedArchivNotes = JSON.parse(localStorage.getItem("archivNote"));
  if (storedArchivNotes) {
    allNotes.archivNote = storedArchivNotes;
  }
}
