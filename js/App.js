import NotesView from './NotesView.js';
import NotesAPI from './NotesAPI.js';

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());

    //最初に必ず呼ばれる
    this._refreshNotes();
  }

  _refreshNotes() {
    const notes = NotesAPI.getAllNotes();
    console.log(notes);

    this._setNotes(notes);

    if (notes.length > 0) {
      this._setActiveNote(notes[0]);
    }
  }

  _setNotes(notes) {
    this.notes = notes;
    this.view.updateNoteList(notes);
  }

  _setActiveNote(note) {
    this.activeNote = note;
    this.view.updateActiveNote(note);
  }

  _handlers() {
    //handlersは処理群を示す
    return {
      onNoteSelect: (noteId) => {
        console.log(noteId + 'のノートが選択されました。');
        const selectedNote = this.notes.find((note) => note.id == noteId);
        this._setActiveNote(selectedNote);
      },
      onNoteAdd: () => {
        console.log('ノートが追加されました。');
        const newNote = {
          title: '新しいノート',
          body: '本文を追加',
        };

        NotesAPI.saveNote(newNote);
        this._refreshNotes();
      },
      onNoteEdit: (title, body) => {
        NotesAPI.saveNote({
          id: this.activeNote.id,
          title: title,
          body: body,
        });

        this._refreshNotes();
      },
      onNoteDelete: (noteId) => {
        console.log(noteId + 'のノートが削除されました。');
        NotesAPI.deleteNote(noteId);
        this._refreshNotes();
      },
    };
  }
}
