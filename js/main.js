const value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')
console.log(value)
let count = 0

btns.forEach((btns) => {
    btns.addEventListener('click', (event) => {
        const even = event.target.classList
        if (even.contains('decrease')) {
            count++
        } else if (even.contains('increase')) {
            count--
        } else {
            count = 0
        }


        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else if (count === 0) {
            value.style.color = "#222";
        }

        value.textContent = count
    })
})