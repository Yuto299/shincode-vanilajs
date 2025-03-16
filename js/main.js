import NotesAPI from './NotesAPI.js';
import NotesView from './NotesView.js';

// NotesAPI.saveNote({
//   id: 123456,
//   title: '更新した2回目のメモです',
//   body: '更新した講座に挑戦中...',
// });

const app = document.getElementById('app');
const view = new NotesView(app, {
  onNoteSelect(id) {
    console.log(id + 'ノートが選択されました');
  },
  onNoteAdd() {
    console.log('ノートが追加されました');
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
  onNoteDelete(id) {
    console.log(id + 'ノートが削除されました');
  },
});
//newTitleとnewBodyの正体は、NotesViewクラスのinputTitle（タイトル入力欄）と inputBody（本文入力欄）の値を.trim()して取得したもの。

console.log(NotesAPI.getAllNotes());

const notes = NotesAPI.getAllNotes();

//サイドバーにメモを全て表示
view.updateNoteList(notes);
