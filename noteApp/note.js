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
                                         <textarea>${notes[note]['content']}</textarea>
                                         <input type="text" value="${notes[note]['author']}">
                                         <div id="edit_layout">
                                            <input type="text" id='new_title'><br/>
                                            <textarea col="30" row="10" id="new_content">
                                            </textarea>
                                            <input type="text" placeholder="author name" id="new_author">
                                         </div>
                                         <div id="controls">
                                            <button id="update${timestamp}">Update</button>
                                         </div>
                                         </form>` 
            console.log(notes[note])
        }
    
    } 
    read_note.appendChild(edit_template)
    document.getElementById("update"+timestamp).addEventListener('click', function(){
       
        // console.log(oldTitle)
    })
    // console.log(update)
    // console.log(edit_template)
}

// update function
