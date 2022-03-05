document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };


const fortuneBtn = document.getElementById("fortuneButton");

const dessertBtn = document.getElementById("dessertButton");
const dessertInput = document.getElementById("desInput");

const askBackBtn = document.getElementById("askBackButton");
const pleaseBtn = document.getElementById("pleaseButton");

const deleteBtn = document.getElementById("deleteButton");
const deleteInput = document.getElementById("delInput");

const updateBtn = document.getElementById("updateButton");
const oldIndex = document.getElementById("indexToUpdate");
const newDessertInput = document.getElementById("updateDessertInput");

const getListBtn = document.getElementById("getFinalDessertList")


function getFortune() {
    axios.get("http://localhost:4000/api/fortune/")
        .then((res) => {
            alert(res.data);
        });
};

function giveDessert() {
    const newDessert = dessertInput.value;

    const dessertBody = {
        newDessert
    }

    axios.post("http://localhost:4000/api/dessert/", dessertBody)
        .then((res) => {
            let dessert = res.data[res.data.length - 1]
            alert(`Thanks for the ${dessert}!`)
            console.log(res.data);

            dessertInput.value= "";
        })
}

function askBack() {
    axios.get("http://localhost:4000/api/askBack/")
        .then((res) => {
            alert(res.data);
        });
};

function please() {
    axios.get("http://localhost:4000/api/please/")
        .then((res) => {
            alert(res.data)
        });
};

function deleteDessert() {
    const newDelete = deleteInput.value;
    axios.delete(`http://localhost:4000/api/delete/${newDelete}`)
        .then((res) => {
            alert("You have been given back your selected dessert")
            console.log(res.data);

            deleteInput.value="";
        })
        .catch((err) => {
            alert(err.response.data);

            deleteInput.value="";
        })
}

function updateDessert() {
    const newDessertName = newDessertInput.value;
    const updatedIndex = oldIndex.value;

    const body = {
        newDessertName
    };

    axios.put(`http://localhost:4000/api/update/${updatedIndex}`, body)
        .then((res) => {
            alert(`The dessert has been updated!`);
            console.log(res.data);

            newDessertInput.value = "";
            oldIndex.value = "";
        })
        .catch((err) => {
            console.log(err);

            newDessertInput.value = "";
            oldIndex.value = "";
        })
}

function getFinalList() {

    axios.get("http://localhost:4000/api/finalList/")
        .then((res) => {
            alert(`${res.data}`);
            console.log(res.data);
        });
}


fortuneBtn.addEventListener("click", getFortune);
dessertBtn.addEventListener("click", giveDessert);
askBackBtn.addEventListener("click", askBack);
pleaseBtn.addEventListener("click", please);
deleteBtn.addEventListener("click", deleteDessert);
updateBtn.addEventListener("click", updateDessert)
getListBtn.addEventListener("click", getFinalList)