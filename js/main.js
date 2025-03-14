import NotesAPI from './NotesAPI.js';

// NotesAPI.saveNote({
//   id: 123456,
//   title: '更新した2回目のメモです',
//   body: '更新した講座に挑戦中...',
// });

console.log(NotesAPI.getAllNotes());
NotesAPI.deleteNote(123456);
