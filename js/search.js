
window.addEventListener("load", async function () {

  scanPostAndShowNewestPost();

});


function scanPostAndShowNewestPost() {
  console.log("投稿一覧取得")
  const lists = document.getElementById("lists");
  const jsonData = { OperationType: 'SCAN', };
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
    


      data.Items.forEach(function (item) {
        if (item.postID == "8") {
          console.log("こんな感じで文章とってきます：", item.sentence)
          const cardText = document.getElementById("card-text")      
          cardText.innerText = item.sentence
        }
      });

    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


