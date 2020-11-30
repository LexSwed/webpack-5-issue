const script = document.createElement('script')

script.src = 'http://localhost:3001/app2.js'

script.onload = () => {
    console.log(window.app2)
}

document.head.appendChild(script)