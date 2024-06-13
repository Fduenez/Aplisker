
const onClickApply = () => {
    console.log("applied!");
}
let elementButtons = document.getElementsByClassName("jobs-apply-button");
Array.from(elementButtons).forEach(el => {
    el.style.backgroundColor = "green";
    el.addEventListener('click', onClickApply);
})



