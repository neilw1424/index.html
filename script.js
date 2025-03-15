const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const toggle = document.querySelector(".toggle");

let selected = card2;

console.log(card2 === selected);

card1.addEventListener("click", () => {
    selected.classList.toggle("selected");

    card1.classList.toggle("selected");
    selected = card1;
});

card2.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card2.classList.toggle("selected");
    selected = card2;
});

card3.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card3.classList.toggle("selected");
    selected = card3;
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("serious");

    if (toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Serious Facts About Me </h3>
                <p>
                    I have sustained a lot of injuries from soccer. These include ...
                </p>
                <ul>
                    <li>3 diagnosed conccusions</li>
                    <li>Partially torn ACL</li>
                    <li>
                        Fractured ankle
                    </li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>Serious Facts About Me </h3>
                <p>
                    I use to be really good at math but now it is very hard because ...
                </p>
                <ul>
                    <li>I chose to take Calc BC 😔</li>
                    <li>I should have paid more attention in math last year 😅</li>
                    <li>
                        My concussions cause me to have a bad memory 🙁
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Serious Facts About Me </h3>
            <p>
                I like to learn different languages. Right now I am trying to learn ...
            </p>
            <ul>
                    <li>Hindi</li>
                    <li>Spanish</li>
                    <li>
                        Punjabi
                    </li>
                </ul>
    `;
    }

    if (!toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Silly Facts About Me 👺 </h3>
                <p>
                   I take a lot of breaks when I do my work. I either play ...
                </p>
                <ul>
                    <li>Rocket League SideSwipe</li>
                    <li>FIFA Mobile</li>
                    <li>
                        Ballz
                    </li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>Silly Facts About Me 👹 </h3>
                <p>
                    I use to never really use emojis but now I do. My most used are ... 
                </p>
                <ul>
                    <li>😭</li>
                    <li>😂</li>
                    <li>
                        ☝🏽
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Silly Facts About Me 🗿 </h3>
            <p>
                                    I used to only listen to drill, trap, and rap, but now I listen to R&B and more calm songs. Some of my new favorites are ...

            </p>
            <ul>
                    <li>If I Ain't Got You by Alicia Keys</li>
                    <li>Piece of My Heart by Wizkid and Brent Faiyaz</li>
                    <li>
                        Found by Tems and Brent Faiyaz
                    </li>
                </ul>
    `;
    }
});
