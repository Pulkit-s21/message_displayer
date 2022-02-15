const messageIn = document.querySelector(".messageIn");
const btn = document.querySelector(".sendBtn");
const messageOut = document.querySelector(".messageOut");

btn.addEventListener("click", showMessage);

function showMessage() {

    if (messageIn.value == '') {
        messageOut.innerHTML = 'Please enter a valid value';
        messageOut.animate([{ opacity: '0.2' }, { opacity: '1' }], { duration: 800, fill: 'forwards' });
        messageOut.style.color = `#FF0000`;
        setTimeout(()=>{
            messageOut.textContent = '';
        }, 1000);
    }
    else {
        messageOut.innerHTML = messageIn.value;
        messageOut.animate([{ opacity: '0.2' }, { opacity: '1' }], { duration: 800, fill: 'forwards' });
        messageOut.style.color = `#D13AD6`;
        setBackToDefault();
    }
}

function setBackToDefault() {
    messageIn.value = '';
}