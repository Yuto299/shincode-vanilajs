export default class NotesAPI {
  //すべてのメモを取得するAPI
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    return notes;
  }

  //メモを保存するAPI
  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();
    const existingNote = notes.find((note) => note.id === noteToSave.id);

    //編集or更新
    if (existingNote) {
      existingNote.title = noteToSave.title;
      existingNote.body = noteToSave.body;
      existingNote.updated = new Date().toISOString();
    } else {
      noteToSave.id = Math.floor(Math.random() * 100000);
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }

    localStorage.setItem('notes', JSON.stringify(notes));
  }

  //メモを削除するAPI
  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();
    const newNotes = notes.filter((note) => note.id != id);

    localStorage.setItem('notes', JSON.stringify(newNotes));
  }
}
