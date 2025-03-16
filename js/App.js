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
      },
      onNoteAdd: () => {
        console.log('ノートが追加されました。');
      },
      onNoteEdit: (title, body) => {
        console.log(title);
        console.log(body);
      },
      onNoteDelete: (noteId) => {
        console.log(noteId + 'のノートが削除されました。');
      },
    };
  }
}
