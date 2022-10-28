//  Get all number elements and store in variable btns
let btns = document.getElementsByClassName("number");

firstNumberArr = new Array();
secondNumberArr = new Array();

for (const btn of btns) {
  btn.addEventListener("click", () => {
    // console.log(typeof btn.value);
    if (
      btn.value != "/" &&
      btn.value != "*" &&
      btn.value != "-" &&
      btn.value != "+" &&
      btn.value != "="
    ) {
      console.log(btn.value);
    }
  });
}
