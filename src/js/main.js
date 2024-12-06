const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');

btn.addEventListener("click", () => {
    modal.style.display = 'block';
    console.log('111')
});
    
window.addEventListener ("click", (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});