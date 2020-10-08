
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
    
}

function main():void {
    isTextPresent("first-name", "Firstname is required");
    isTextPresent("last-name", "Last name is required");

}
/**
 * Returns true if the text box with the given id
 * has some text inside it
 * @param id The id of the <input type ="text"> to validate
 * @param errMsg The message to display in the sibling span of
 * the textbox
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    else{
        return true;
    }
}
