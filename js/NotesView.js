export default class NotesView {
  constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
    this.root = root;
    //thisは自分自身のclassを指す、右辺のrootはmain.jsのapp
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
      <!-- サイドバー -->
      <div class="notesSidebar">
        <button class="notesAdd" type="button">ノートを追加</button>
        <div class="notesList">
          <div class="notesList-item">
          </div>
        </div>
      </div>
      <!-- ノートプレビュー -->
      <div class="notesPreview">
        <input type="text" class="notesTitle" placeholder="タイトルを記入" />
        <textarea class="notesBody" placeholder="ここに本文を追加"></textarea>
      </div>
    `;
  }
}
