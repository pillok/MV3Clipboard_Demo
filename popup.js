document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button1").addEventListener("click", async function(){
        alert("The button has been clicked on")
        var body = document.getElementsByTagName("body")[0].style.backgroundColor = "aqua";
        let res = await chrome.runtime.sendMessage({greeting: "hello"})
        console.log(res);
        // navigator.clipboard.readText().then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.error(err);
        // })
    });
});


