const script = document.createElement('script')

script.src = 'http://localhost:3001/app2.js'

script.onload = () => {
    document.body.textContent = window.app2.default
}

document.head.appendChild(script)