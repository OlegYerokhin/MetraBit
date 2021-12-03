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
        if(event.target.status >= 400) {
            console.log(`An error ${event.target.status} was encountered`)
        }
    }

    request.onreadystatechange = function(event) {
		if(event.target.readyState === 4) {
            const data = request.response
            const arr = []
            const users = []
            for(let item of data) {
                arr.push(item)
            }
            users.push(arr.filter(element => element.userId === 2).slice(0, 5))
            users.push(arr.filter(element => element.userId === 4).slice(0, 5))
            users.push(arr.filter(element => element.userId === 6).slice(0, 5))
            
            let h2
            let input
            let ul
            let li

            function createElement(idElement){
                return document.createElement(idElement)
            }

            function selector(idElement) {
                return document.querySelector(idElement)
            }

            let firstUser = selector('#user_2')
            let secondUser = selector('#user_4')
            let thirdUser = selector('#user_6')

            function addContent() {
                let listElement = document.querySelectorAll('.list-element')
                for(let i = 0; i < listElement.length; i++) {
                    h2 = createElement('h2')
                    listElement[i].appendChild(h2)
                    h2.innerText = `To-Do list for user №${users[i][i].userId}`
                }

                function createListElemets(index, user) {
                    ol = createElement('ol')
                    for(let item of users[index]){
                        li = createElement('li')
                        input = createElement('input')
                        input.type = 'text'
                        input.disabled = true
                        
                        user.appendChild(ol).appendChild(li).appendChild(input)
                        input.value = `${item.title}`
                    }
                }
                createListElemets(0, firstUser)
                createListElemets(1, secondUser)
                createListElemets(2, thirdUser)
            }
            addContent()
        }
    }
}
makeRequest()
