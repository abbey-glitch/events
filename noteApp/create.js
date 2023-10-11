window.onload = function(note_store){
    note_store = JSON.parse(localStorage.getItem('notes'))
    if(note_store == null || note_store == undefined){
        info.textContent = 'note store is empty'
    }else{
        //check the note length in the store and inform the user the length
        // of note
        let notesLength = note_store.length
        info.textContent = `you currently have ${notesLength} note`
    }
}

// function to save a note
let save = document.getElementById('save')
save.addEventListener('click', function(){
      // check store if there is a note if not display that
    // store is empty
    let title = document.getElementById('title').value.trim()
    let content = document.getElementById('content').value.trim()
    let author = document.getElementById('author').value.trim()
    let date = new Date();
    let timestamp = date.getMilliseconds()
    let warn = document.getElementById('warning')
    console.log(warn)
    let msg = ''
    let info = document.getElementById('info')
    let noteVault = []
    if(title.length == 0 || content.length == 0 || author.length == 0){
        msg = 'you can not save empty note'
        warn.textContent = msg
        warn.setAttribute('class', 'error')
    }else{
        // there is note
        let note_store = JSON.parse(localStorage.getItem('notes'))
        if(note_store == null || note_store == undefined){
            noteVault.push({title, content, author, timestamp})
            localStorage.setItem('notes', JSON.stringify(noteVault))
            msg = 'your first note saved'
            warn.textContent = msg
            warn.setAttribute('class', 'success')
        }else{
            // there is a note in the storage
            old_note = note_store
            old_note.push({title, content, author, timestamp})
            localStorage.setItem('notes', JSON.stringify(old_note))
            console.log(old_note)
        }
    }
})
function read(){
    location.href = 'read.html'
}