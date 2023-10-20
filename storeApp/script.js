//let img = document.getElementById("products");


// let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.escuelajs.co/api/v1/products')
// xhr.onload = function(){
//     let feedback = JSON.parse(xhr.responseText)
//     if(xhr.status == 200 || xhr.readyState == 400){
//         let template = document.getElementById('products')
//         let html_template = document.createElement("div")

        
//         // feedback.map(items => {
//         //     console.log(items);
//         //     let products = items.images; 
//         //     products.map(async (proImages) => {
//         //         // console.log(proImages);
//         //         let doc = document.createElement('img')
//         //         doc.src = proImages
//         //         // doc.setAttribute("src", proImages)
//         //         console.log(doc);
//         //         added(doc)
                
//         //     })

            
//         //})
//     }
// }
// xhr.send()

// function added(pro){
//     img.appendChild(pro)
// }

(async function(){
    let template = document.getElementById('products')
    console.log(template)
    await fetch('https://api.escuelajs.co/api/v1/products')
    .then(datas=>datas.json()).then(datas=>{
        console.log(datas[0]['category'])
        let div = document.createElement('div')
        div.innerHTML = `<img src=${datas[0]['image']}  id="${datas[0]['id']}"width="100%">
                        <p>hello</p>`
        div.setAttribute('class', 'product_overlay')
        div.innerHTML = "<h3>List All Products</h3>"
       for(let data=0; data<datas.length; data++){
            console.log(datas[data]['images'])
           div.innerHTML += `<div id="${datas[data]['id']}">
                                <figure>
                                    <img src=${datas[data]['images']} width="100%">
                                    <figcaption>${datas[data]['title']}</figcaption>
                                </figure>
                                <label>price:</label>${datas[data]['price']}
                               <p>${datas[data]['description']}</p>
                               <button id=${datas[data]['id']}>Add</button>
                             </div>`
           console.log(div)
        }
        template.appendChild(div)
    })

})()