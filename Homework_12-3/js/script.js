function makeRequest() {
    const request = new XMLHttpRequest()
    const url = 'https://jsonplaceholder.typicode.com/todos'
    
    request.open(
      'GET',
      url
    )
    request.setRequestHeader('Content-Type', 'application/json')
    request.responseType = 'json'

    request.send()

    request.onload = function(event) {
        if(event.target.status === 200) {
            console.log(`${event.target.status}: The server successfully processed the request`)
        }
        
    }

    request.onerror = function(event) {
        if(event.target.status >= 400) {
            console.log(`An error ${event.target.status} was encountered`)
        }
    }

    request.onreadystatechange = function(event) {
		if(event.target.readyState === 4 
            && event.target.status === 200) {
            const data = request.response
            const arr = []
            const users = []
            
            for(let i = 0; i < data.length; i++) {
                arr.push(data[i])
            }

            users.push(arr.filter(element => element.userId === 2).slice(0, 5));
            users.push(arr.filter(element => element.userId === 4).slice(0, 5));
            users.push(arr.filter(element => element.userId === 6).slice(0, 5));
            
            (function() {
                let body = document.querySelector('body');
                for(let i = 0; i < users.length; i++) {
                    let div = document.createElement('div')
                    body.appendChild(div)
                    let title = document.createElement('h2')
                    div.appendChild(title)
                    title.innerText = `To-Do List for user № ${users[i][0].userId}`

                    let btn = document.createElement('button')
                    div.appendChild(btn)
                    btn.innerText = 'Add new item'
                    btn.className = 'add-item-btn'

                    let addItemDiv = document.createElement('div')
                    div.appendChild(addItemDiv)
                    addItemDiv.style.display = 'none'
                    addItemDiv.className = 'add-item'

                    let textarea = document.createElement('textarea')
                    addItemDiv.appendChild(textarea)

                    let btnAdd = document.createElement('button')
                    addItemDiv.appendChild(btnAdd)
                    btnAdd.innerText = 'Add'

                    btn.onclick = () => {
                        if(addItemDiv.style.display === 'block') {
                            addItemDiv.style.display = 'none'
                        } else {
                            addItemDiv.style.display = 'block'
                        }
                    }

                    let olList = document.createElement('ol')
                    div.appendChild(olList)
                    for(j = 0; j < users[i].length; j++) {
                        let liList = document.createElement('li')
                        olList.appendChild(liList)
                        let input = document.createElement('input')
                        input.disabled = true
                        liList.appendChild(input)
                        input.value = `${users[i][j].title}`

                        let btnRemove = document.createElement('button')
                        liList.appendChild(btnRemove)
                        btnRemove.innerText = 'Remove'

                        let btnEdit = document.createElement('button')
                        liList.appendChild(btnEdit)
                        btnEdit.innerText = 'Edit'

                        btnEdit.onclick = () => {
                            if(input.disabled === true) {
                                input.disabled = false
                            } else {
                                input.disabled = true
                            }
                        }
                    }
                }
            })()
        }
    }
}
makeRequest()