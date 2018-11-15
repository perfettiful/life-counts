/**
* Code Sampel found at :
* https://flaviocopes.com/canvas/
*/
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')


// const debounce = (func) => {
// let timer
// return (event) => {
// if (timer) { clearTimeout(timer) }
// timer = setTimeout(func, 100, event)
// }
// };
window.addEventListener('click', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    for (let i = 0; i < 28; i++) {
        for (let j = 0; j < 52; j++) {
            //c.strokeStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
            c.strokeRect(j * 20, i * 20, 20, 20)
            c.fillStyle = 'purple';
            c.fillRect(400, 100, 100, 100);
        }
    }
});

console.log('Were in breh!')