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
      if(event.target.readyState === 4 && event.target.status === 200) {
        const data = request.response
        const arr = []
        const users = []
        for(let i = 0; i < data.length; i++) {
          arr.push(data[i])
        }
        users.push(arr.filter(element => element.userId === 2).slice(0, 5));
        users.push(arr.filter(element => element.userId === 4).slice(0, 5));
        users.push(arr.filter(element => element.userId === 6).slice(0, 5));
  
        function createList() {
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
            
            btn.onclick = () => {
              if(addItemDiv.style.display === 'block') {
                addItemDiv.style.display = 'none'
              } else {
                addItemDiv.style.display = 'block'
              }
            }
            
            let addItemDiv = document.createElement('div')
            div.appendChild(addItemDiv)
            addItemDiv.style.display = 'none'
            addItemDiv.className = 'add-item'
            let textarea = document.createElement('textarea')
            addItemDiv.appendChild(textarea)
            let btnAdd = document.createElement('button')
            addItemDiv.appendChild(btnAdd)
            btnAdd.innerText = 'Add'
            let olList = document.createElement('ol')
            div.appendChild(olList)
  
            function createUnit() {
              for(let j = 0; j < users[i].length; j++) {
                let liList = document.createElement('li')
                olList.appendChild(liList)
                let input = document.createElement('input')
                input.disabled = true
                liList.appendChild(input)
                input.value = `${users[i][j].title}`
                
                let btnRemove = document.createElement('button')
                btnRemove.className = 'btn-remove'
                liList.appendChild(btnRemove)
                btnRemove.innerText = 'Remove'
                btnRemove.onclick = () => {
                  const url = `https://jsonplaceholder.typicode.com/todos/${users[i][j].id}`;
                  fetch(url, {
                    method: 'DELETE'
                  }).then((response) => response.json())
                  .then(() => {
                    users[i].splice((users[i].indexOf(users[i][j])), 1)
                    olList.innerText = ''
                    createUnit()
                  }).catch((error) => console.log(error))
                }
                
                let btnEdit = document.createElement('button')
                liList.appendChild(btnEdit)
                btnEdit.innerText = 'Edit'
                btnEdit.onclick = () => {
                  if(input.disabled === true) {
                    input.disabled = false
                    input.focus()
                  } else {
                    input.disabled = true
                    const url = `https://jsonplaceholder.typicode.com/todos/${users[i][j].id}`
                    let result
                    fetch(url, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'Application/json'
                        },
                        body: JSON.stringify({
                          title: input.value
                        })
                      }).then((response) => response.json())
                      .then((json) => result = json)
                  }
                }
                
                btnAdd.onclick = () => {
                  // let liList = document.createElement('li')
                  let newToDo = {
                    userId: users[i][0].userId,
                    id: users[i][users[i].length - 1].id + 1,
                    title: `${textarea.value}`,
                    completed: false
                  }
                  users[i].unshift(newToDo)
                  const url = `https://jsonplaceholder.typicode.com/todos`
                  fetch(url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(users[i][0])
                  }).then((response) => response.json())
                  .then(() => {
                    olList.innerHTML = ''
                    addItemDiv.style.display = 'none'
                    createUnit()
                  })
                }
              }
            }
            createUnit()
          }
        }
        createList()
      }
    }
  }
  makeRequest()