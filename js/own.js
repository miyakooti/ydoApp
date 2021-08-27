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


      console.log(data[0].Items[0].sentence)
      document.getElementById("card-timestamp").innerText = data[0].Items[0].timestamp
      document.getElementById("card-text").innerText = data[0].Items[0].sentence



    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
