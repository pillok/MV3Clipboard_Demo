let input = document.createElement('textarea');
document.body.appendChild(input);

let tempArea = document.createElement('textarea');
document.body.appendChild(tempArea);

let history = [];

setInterval(() => {
    let current = getClipboardCurrent();
    if(current != '') {
        if (history[history.length - 1] != current) {
            history.push(current);
        }
    }

    console.log(history);
}, 250);



function getClipboardCurrent() {
    tempArea.select();
    tempArea.focus();
    document.execCommand('paste');
    let val =  tempArea.value;
    tempArea.value = '';
    return val;
}
// setTimeout(() => {
//     document.execCommand('paste');
//     console.log(input.value);
// }, 2000)