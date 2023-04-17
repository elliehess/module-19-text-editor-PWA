import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// This method accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('ADD content to the database');

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.add({content});
  const result = await request;
  console.log('data saved to database', result);
};console.error('putDb not implemented');

// This method gets all the content from the database
export const getDb = async () => {
  console.log('GET content from the database');

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}; console.error('getDb not implemented');

initdb();
