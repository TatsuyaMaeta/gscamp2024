const bgWrapper = document.querySelector(".wrapper");
const el = document.querySelector("#js-show-popup");
const el2 = document.getElementById("js-black-bg");
let modalTxt = document.querySelector("#editTxt");
let content = "";
const btnTag = '<button id="js-show-popup">Show Popup</button>';
let flg = false;

function popupImage() {
    var popup = document.getElementById("js-popup");
    if (!popup) return;

    var blackBg = document.getElementById("js-black-bg");
    var closeBtn = document.getElementById("js-close-btn");
    var showBtn = document.getElementById("js-show-popup");
    var showBtn = document.getElementById("js-show-popup");

    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);

    function closePopUp(elem) {
        //functionから抜ける
        if (!elem) return;
        elem.addEventListener("click", function () {
            popup.classList.toggle("is-show");
            console.log("is-show");
            console.dir(bgWrapper.innerHTML);
            if (!flg) {
                console.log("false");
            } else {
                bgWrapper.innerHTML = `${btnTag}
                <div id="txt">
            <p class="item-title">${contentText[0]}</p>
            <br />
            <p class="item-text">${contentText[1]}</p>
        </div> `;
                popupImage();
            }
        });
    }
}
popupImage();

el.addEventListener("click", () => {
    console.log(modalTxt);
    modalTxt.setAttribute("contentEditable", true);
    // currentTxt();
});
// bgWrapper.append(el);

el2.addEventListener("click", () => {
    console.log(content);
});
modalTxt.addEventListener("change", () => {
    let elem = document.querySelector("#editTxt");
    content = elem.innerHTML;
    console.log(content);
});

let contentText = [];
function textChange(elm) {
    contentText = [elm.children[0].innerText, elm.children[2].innerText];
    console.log(elm.children[0].innerText);
    console.log(elm.children[2].innerText);
    document.getElementsByClassName("wrapper").innerHTML = 1;
    flg = true;
}

console.log("aa");
// モーダル開いている時はスクロールさせない
const showDialog = () => {
    // document.getElementById("dialog").classList.add("show");
    const scrollY =
        document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    alert('fixed');
    body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    document.getElementById("dialog").classList.remove("show");
};
window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
    );
});
