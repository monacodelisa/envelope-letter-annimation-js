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
    if (pass == '37fd4045') {
        letter.innerHTML = `<div class="letter-text"><p>Мила Моли,</p> <p>Няма достатъчно думи с които да мога да изразя колко много те обичам и колко се гордея с теб. <p>Ти заемаш специално място в моето сърце от момента, в който се роди. Възхищавам се на твоята красота, твоите умения, и на твоята смелост.</p> <p></p>Всяка година те наблюдавах как растеш, как се развиваш и как превръщаш във великолепна млада жена. Имаш уникални таланти и способности, и това, което постигаш, е невероятно впечатляващо.</p>
        <p> Искам да знаеш, че никога не се колебая да те подкрепям и да ти помагам да постигнеш всичко, което пожелаеш.</p>
        <p>Ти си моята любима дъщеря, моето съкровище, обичам те to the moon and back. </p><p> באהבה
        <br>мама Ести.</p>
        </div>`
    }
  
}
