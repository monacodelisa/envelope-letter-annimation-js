const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const brnRead = document.querySelector('.read');
const btnOpen = document.querySelector(".open");
const btnReset = document.querySelector(".reset");

const templateLetter = `<button class="read">Read Me</button>
<div class="words line1"></div>
<div class="words line2"></div>
<div class="words line3"></div>
<div class="words line4"></div>`

envelope.addEventListener("click", open);
letter.addEventListener("click", read);
btnOpen.addEventListener("click", open);
btnReset.addEventListener("click", close);

function open() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
    letter.classList.add("open");
    letter.classList.remove("close");

}

function close() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
    letter.classList.add("close");
    letter.classList.remove("open");
    letter.innerHTML = 
    `${templateLetter}`
    letter.classList.remove("expanded");
}
 
function read() {
    letter.classList.add("expanded");

    const pass = prompt('password');
    if (pass == 'lorem') {
        letter.innerHTML = `<div class="letter-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Nulla quis sem at nibh elementum 
        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta</p>
        </div>`
    }
  
}
