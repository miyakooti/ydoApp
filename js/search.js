
window.addEventListener("load", async function () {

  scanPostAndShowNewestPost();

});


document.getElementById("post0-button").onclick = function () {
  window.sessionStorage.setItem("index", 0)
}

document.getElementById("post1-button").onclick = function () {
  window.sessionStorage.setItem("index", 1)
}

document.getElementById("post2-button").onclick = function () {
  window.sessionStorage.setItem("index", 2)
}


function scanPostAndShowNewestPost() {
  console.log("投稿一覧取得")
  const lists = document.getElementById("lists");
  const jsonData = { OperationType: 'LATESHOW', };
  fetch('https://vefjo6rdrl.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-posttable/intern-groupb-posttable', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  })

    .then(response => response.json())
    .then(data => {

      // item = data.Items[data.Items.length-1]


      console.log(data[0].Items[0].sentence)
      document.getElementById("card-text1").innerText = data[0].Items[0].sentence
      document.getElementById("card-text2").innerText = data[1].Items[0].sentence
      document.getElementById("card-text3").innerText = data[2].Items[0].sentence



    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


