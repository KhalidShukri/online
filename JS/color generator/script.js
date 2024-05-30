document,addEventListener('DOMContentLoaded',function () {
    const generateBtn = document.getElementById('generateBtn')
    const palette = document.getElementById('palette')
    // function to generate a arandom color
    function getRandomColor() {
        const letters = '0123456789ABCDEF'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]

        }

        return color;

    }
//   function to generate the color palette
    function generateColors() {
        // clear palette
        palette.innerHTML = ''

        for (let i = 0;i < 5;i++) {
            const color = getRandomColor();
            const colorbox  = document.createElement('div')
            colorbox.className = "color-box"
            colorbox.style.background = color;
            colorbox.textContent = color

            colorbox.addEventListener('click', function () {
                copyToClipboardr(color)
                alert(`copied ${color} to clipboard`)
            })
            palette.appendChild(colorbox)

        }

    }
// function to generate a random color
    function copyToClipboardr(text) {
        const textarea = document.createElement('textarea')
        textarea.value = text;
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)

    }

    // Event listener for generate button
    generateBtn.addEventListener('click', generateColors)

    // initial color generation
    generateColors()

    
})
