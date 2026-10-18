function changeText(){
    let ans = document.getElementById("ans");
    ans.textContent = "Hello Bridgeabz";
}
let ans = document.getElementById("ans");
ans.removeEventListener("click", changeText);