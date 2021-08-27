
window.addEventListener("load", async function () {

  scanPostAndShowNewestPost();

});

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

      console.log("TESTTESTTESTTESTTESTTESTTEST")
      index = window.sessionStorage.getItem("index");
      console.log(index)

      const item = data[index].Items[0]
      document.getElementById("time-stamp").innerText = item.timestamp
      document.getElementById("card-text").innerText = item.sentence



    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


