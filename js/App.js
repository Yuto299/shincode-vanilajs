import NotesView from './NotesView.js';

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());
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
