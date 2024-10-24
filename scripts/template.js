function init() {
  getFromLocalStorage();
  loadDeletedNotices();
  loadArchivNotes();
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function getNoteTemplate(indexNote) {
  return `<div class="notices"><h3> ${allNotes.notesTitles[indexNote]}</h3>${allNotes.notes[indexNote]}<div class="buttonContainer"><button class="archivButton" onclick="moveNote(${indexNote}, 'notes', 'archivNote')">A</button><button class="deleteButton" onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">X</button></div></div>`;
}

function getArchivNoteTemplate(indexArchivNote) {
  return `<div class="notices"><h3> ${allNotes.archivNoteTitles[indexArchivNote]}</h3> ${allNotes.archivNote[indexArchivNote]}<div class="buttonContainer"><button class="archivButton" onclick="moveNote(${indexArchivNote}, 'archivNote', 'notes')">R</button><button class="deleteButton" onclick="moveNote(${indexArchivNote}, 'archivNote', 'trashNotes')">X</button></div></div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<div class="notices"><h3> ${allNotes.trashNotesTitles[indexTrashNote]}</h3> ${allNotes.trashNotes[indexTrashNote]}<div class="buttonContainer"><button class="archivButton" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'archivNote')">A</button><button class="deleteButton" onclick="deleteNote(${indexTrashNote})">X</button> </div></div>`;
}

function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(allNotes.notes));
  localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
}

function saveDeletedNotices() {
  localStorage.setItem(
    "trashNotesTitles",
    JSON.stringify(allNotes.trashNotesTitles)
  );
  localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
}

function saveArchiveNotes() {
  localStorage.setItem(
    "archivNoteTitles",
    JSON.stringify(allNotes.archivNoteTitles)
  );
  localStorage.setItem("archivNote", JSON.stringify(allNotes.archivNote));
}
