console.log("Hello");
const inputText = document.getElementById('inputText');
const listBox = document.getElementById('listBox');
const add = () => {
    if(inputText.value === ''){
        // alert("You have to write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        attachEventListeners(li);
    }
    inputText.value = "";
    saveData();

    const d = String(new Date()).slice(4,21);
    console.log(d);
    let dateRecieved = document.getElementById('date').innerHTML = 'last updated on '+d;

}

const attachEventListeners = (li) => {
    li.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle('check');
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData(); // Re-save data after removing an item
        }
    });
};

const saveData = () => {
    localStorage.setItem("data",listBox.innerHTML);
}

const show = () => {
    const dataSaved = localStorage.getItem("data");
    if (dataSaved) {
        listBox.innerHTML = dataSaved;
        // Re-attach event listeners to all items after loading from localStorage
        const allItems = listBox.querySelectorAll('li');
        allItems.forEach(item => {
            attachEventListeners(item);
        });
    }
}
show();

document.getElementById('btn').addEventListener('click',add);