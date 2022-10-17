
let counter = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
btn.addEventListener('click', function(e){
   const styles = e.currentTarget.classList;
if (styles.contains('decrease')) {
counter -= 1;
}
console.log(counter);
 if (styles.contains('increase')){
    counter+= 1;
}

if (styles.contains('reset')){
    counter = 0;
}
value.textContent = counter;
})  ;  
});
