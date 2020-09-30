// Source: https://medium.com/@AndyHaskell2013/build-a-basic-web-app-with-indexeddb-8ab4f83f8bda

if (window){
    console.log('as')
} else {
    console.log('no window')
}
( async () => {
    'use strict'
    const version = 1
    const dbName = 'db'
    const storeName = 'store'
    if ('indexedDB' in window){
        let dbObject
        const db = indexedDB.open(dbName , version)
        db.onupgradeneeded = (oEvent) => {
            dbObject = oEvent.target.result
            let notes = dbObject.createObjectStore('notes', {autoIncrement: true})
        }

        db.onsuccess = function(event){
            dbObject = event.target.result
            addStickyNotes(dbObject, 'Sundays are awesome')
            addStickyNotes(dbObject, 'sloths are sleepy')
            addStickyNotes(dbObject, 'Its raining')
            readnote(dbObject, 1)
            getAndDisplayNotes(dbObject)
            createIndex(db)

            //Indexing
        }

        db.onerror = (oEvent) => {
            console.error(oEvent.target.errorCode)
        }

        function addStickyNotes(db, note){
            let tx = db.transaction(['notes'], 'readwrite')
            let store = tx.objectStore('notes')
            let noteObject = {
                note : note,
                time: Date.now()
            }
            store.add(noteObject)
            tx.oncomplete = () => console.log('Created note')
            tx.onerror = event => console.error(event.target.errorCode)
        }
         
        function readnote(db, noteId){
            let tx = db.transaction(['notes'], 'readonly')
            let store = tx.objectStore('notes')
            let request = store.get(2)

            request.onsuccess = (oEvent) => {
                let note = oEvent.target.result
                if (note){
                    console.dir(note)
                } else {
                    console.error('Note not found')
                }
            }
        }

        function getAndDisplayNotes(db){
            let tx = db.transaction(['notes'], 'readonly')
            let store = tx.objectStore('notes')
            let cursor = store.openCursor()
            let allnotes = []
            cursor.onsuccess = (oEvent) => {
                let cursor = oEvent.target.result
                if (cursor !== null ){
                    console.dir(cursor.value)
                    cursor.continue()  
                } else {

                }
            }
        }

        function createIndex(dbReq){
            dbReq.onupgradeneeded = (oEvent) => {
                const db = oEvent.target.result
                let notes;
                if (!db.objectStoreNames.contains('notes')){
                    notes = db.createObjectStore('notes', {autoIncrement: true})
                } else {
                    notes = dbReq.transaction.objectStore('notes')
                }

                if (!notes.indexNames.contains('timestamp')){
                    
                    notes.createIndex('timestamp', 'timestamp') //First argument is name of the index and second argument is the key path
                }
            }
        }
    }
}
)()