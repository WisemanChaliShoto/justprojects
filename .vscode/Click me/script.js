const button = document.querySelector('button')
const body = document.querySelector('body')
const color = ['red','blue','pink','yellow','white']

 body.style.backgroundColor = 'yellow'



const changeColor = () => {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]

    }

button.addEventListener('click', changeColor)


