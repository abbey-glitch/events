// get the static html docs
let read_note = document.getElementById('read_note')

// get the note available in the local storage
let notes = JSON.parse(localStorage.getItem('notes'))
// create an html template in your js file to view the note
let read_template = document.createElement('div')
read_template.classList.add('first-section')
read_template.innerHTML = `<h3>View note from storage</h3>`
for(let note=0; note<notes.length; note++){
      read_template.innerHTML += `<section>
                                     <input type="text" value="${notes[note]['title']}">
                                     <p>${notes[note]['content']}</p>
                                     <p>${notes[note]['author']}</p>
                                     <button onclick="deleteNote(${notes[note]['timestamp']})">Delete</button>
                                     <button onclick="Edit(${notes[note]['timestamp']})">Edit</button>
                                  </section>`
 }
read_note.appendChild(read_template)

function deleteNote(timestamp){
    // console.log(timestamp)
    let notes = JSON.parse(localStorage.getItem('notes'))
    for(let i=0; i<notes.length; i++){
        let note = notes[i]
        // console.log(note)
        if(note['timestamp'] == timestamp){
            notes.splice(i, 1)
            localStorage.setItem('notes', JSON.stringify(notes))
            location.reload()
        }
    }
}
// let wrapper = document.getElementById("wrapper")
//     console.log(wrapper)
function Edit(timestamp){
    // console.log(read_note)
    let notes = JSON.parse(localStorage.getItem('notes'))
    let edit_template = document.createElement('div')
    edit_template.innerHTML  = ''
    for(let note=0; note<notes.length; note++){
        if(notes[note]['timestamp'] == timestamp){
            edit_template.innerHTML += `
                                        <form method="" action="javascript:void" class="first-section">
                                        <h3>note to be edited</h3>
                                         <input type="text" value="${notes[note]['title']}" id="oldTitle"><br/>
                                         <textarea id="oldContent">${notes[note]['content']}</textarea>
                                         <input type="text" id="oldAuthor" value="${notes[note]['author']}">
                                         <div id="edit_layout">
                                            <input type="text" id='new_title' placeholder="enter a note title to update"><br/>
                                            <textarea col="30" row="10" id="new_content" placeholder="txt content to update">

                                            </textarea>
                                            <input type="text" placeholder="author name" id="new_author" placeholder="author name">
                                         </div>
                                         <div id="controls">
                                            <button id="update${timestamp}">Update</button>
                                         </div>
                                         </form>` 
            // console.log(notes[note])
        }
    
    } 
    read_note.appendChild(edit_template)
    document.getElementById("update"+timestamp).addEventListener('click', function(){
        old_title = document.getElementById('oldTitle').value
        old_content = document.getElementById('oldContent').value
        old_author = document.getElementById('oldAuthor').value
        let new_title = document.getElementById('new_title').value.trim()
        let new_content = document.getElementById('new_content').value.trim()
        let new_author = document.getElementById('new_author').value.trim()
        if(new_title.length == 0 || new_content.length == 0 || new_author.length == 0){
            alert('field is required for update')
        }else if(new_title == old_title || new_content == old_content){
            alert("title already exist")
        }else{
            let dateUpdate = new Date()
            let newTimestamp = dateUpdate.getMilliseconds()
            for(let i=0; i<notes.length; i++){
               if(notes[i]['timestamp']==timestamp){
                 notes[i]['title'] = new_title
                 notes[i]['content'] = new_content
                 notes[i]['author'] = new_author
                 notes[i]['timestamp'] = newTimestamp
               }
            }
            localStorage.setItem('notes', JSON.stringify(notes))
            location.href = "class.html"
            // alert('procceed to update')
        }
    })
    // console.log(update)
    // console.log(edit_template)
}

// update function
