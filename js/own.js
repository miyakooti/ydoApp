window.addEventListener("load", async function () {

    searchUser();

});

function searchUser(id) {
    console.log("ユーザー検索")
    console.log(id)
    const jsonData = {
      OperationType: 'QUERY', Keys: {
        userID: 1
      }
    }
    fetch('https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then(response => response.json())
      .then(data => {
        // 検索結果が複数の場合も対応できる。これは投稿で使う
        data.Items.forEach(function (item) {
          console.log('検索結果', item.user_name);
          document.getElementById("userIDLabel").innerText = item.user_name
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}