function init() {
  getFromLocalStorage();
  loadDeletedNotices();
  loadArchivNotes();
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function getNoteTemplate(indexNote) {
  return `<div class="notices"><h3> ${notesTitle[indexNote]}</h3>${notes[indexNote]}<div class="buttonContainer"><button class="archivButton" onclick="archiveNote(${indexNote})">A</button><button class="deleteButton" onclick="deleteAndDisplayNotice(${indexNote})">X</button></div></div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<div class="notices"><h3> ${trashNotesTitles[indexTrashNote]}</h3> ${trashNotes[indexTrashNote]}<div class="buttonContainer"><button class="deleteButton" onclick="completeDeleteNote(${indexTrashNote})">X</button> </div></div>`;
}

function getArchivNoteTemplate(indexArchivNote) {
  return `<div class="notices"><h3> ${archivTitle[indexArchivNote]}</h3> ${archivNote[indexArchivNote]}<div class="buttonContainer"><button class="deleteButton" onclick="deleteArchivNote(${indexArchivNote})">X</button></div></div>`;
}

function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("notesTitle", JSON.stringify(notesTitle));
  saveDeletedNotices();
}

function saveDeletedNotices() {
  localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

function saveArchiveNotes() {
  localStorage.setItem("archivTitle", JSON.stringify(archivTitle));
  localStorage.setItem("archivNote", JSON.stringify(archivNote));
}
