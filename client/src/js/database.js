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
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id:1, jate: content});
  const result = await request;
  console.log('data saved to database', result.jate);
};

// This method gets all the content from the database
export const getDb = async (id) => {
  console.log('GET content from the database');
// Nick helped me during office hours with the method
  const jateDb = await openDB('jate', 1);
  const result = await jateDb
  .transaction('jate', 'readonly')
  .objectStore('jate').get(id);
  console.log('result.value', result);
  result ? console.log('You got Data!'):console.log('data not found')
  return result?.jate;
};

initdb();
