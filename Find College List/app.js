let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let list = document.querySelector("#list");

btn.addEventListener("click", async () => {
  let input = document.querySelector("input");
  let country = input.value;
  let finalData = await getCollege(country);
  
  
  if(finalData.length > 0) {
    showArr(finalData);
  } else {
    ErrorMessage("No colleges found for the given input.");
  }
  input.value = "";
});

function showArr(finalData) {
  list.innerText = "";
  for(col of finalData){
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
    
  }
}
function ErrorMessage(message) {
  let box = document.querySelector(".box");
  list.innerText = message
  box.style.background = "red";
  setTimeout( ()=> {
    box.style.background = "white";
  },100)
}

async function getCollege(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    return [];
  }
}