document.addEventListener('DOMContentLoaded' , function () {
    const generateBtn =document.getElementById('generateBtn') 
    const palette = document.getElementById('palette')

    function getrandomcolor() {
        const letters = '0123456789ABCDEF'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    function generatecolor() {
        palette.innerHTML = ''

        for (let i = 0;i < 5;i++) {
            const color = getrandomcolor()
            const colorbox = document.createElement("div")
            colorbox.className = "color-box"
            colorbox.style.backgroundColor = color
            colorbox.textContent = color

            colorbox.addEventListener('click',function () {
                copytoclipboardr(color)
                alert(`your ${color} is copied to Clipboard`)
            })
            palette.appendChild(colorbox)
        }
       
        function copytoclipboardr(text) {
            const textarea = document.createElement('textarea')
            textarea.value = text
            document.body.appendChild(textarea)
            textarea.select()
            document.execCommand('copy')
            document.body.removeChild(textarea)
        }
        
    }
    generateBtn.addEventListener('click',generatecolor)

    generatecolor()
})