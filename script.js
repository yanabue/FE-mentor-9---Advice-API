    window.addEventListener("resize", adjustDividerImg);

    function adjustDividerImg() {
    const windowWidth = window.innerWidth;
    const dividerImg = document.getElementById("divider-line");

    if (windowWidth < 650) {
        dividerImg.src = "./images/pattern-divider-mobile.svg";
    } else {
        dividerImg.src = "./images/pattern-divider-desktop.svg";
    }
    }
    adjustDividerImg();

    const generateBtn = document.getElementById("generate-new");

    generateBtn.addEventListener("click", fetchAdvice);

    function fetchAdvice() {
   
    fetch("https://api.adviceslip.com/advice").then((response) => {
        response.json().then((data) => {
        let adviceID = data["slip"]["id"];
        let adviceText = data["slip"]["advice"];
        updateUI(adviceID, adviceText);
        });
    });
    }

    function updateUI(adviceID, adviceText) {
    const adviceIdElement = document.getElementById("advice-id");
    const adviceTextElement = document.getElementById("advice-text");

    adviceIdElement.innerText = `Advice #${adviceID}`;
    adviceTextElement.innerText = `${"\u201C"}${adviceText}${"\u201D"}`;
    }
