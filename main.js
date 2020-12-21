console.log("🍑");
let results = null;

function showResultLength () {
  document.getElementById('big-boi').innerText = results.length;
}

function makeFetchHappen () {
  fetch('https://www.reddit.com/search.json?q=puppies')
  .then(function(responseData) {
    return responseData.json()
  })
  .then(function(responseJson) {
    results = responseJson.data.children
    console.log(results)
    showResultLength()
  })
  .catch(function(error) {
    console.log(error)
  })
}

document.getElementById('ajax').addEventListener('click', makeFetchHappen)

// fetch(URL)
// .then(response => response.json())
// .then(jsonData => {
//   // code here
// })


console.log("Yay data!")