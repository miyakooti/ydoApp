window.addEventListener("load", async function () {

  scanUser()
  // putUser()
  searchUser()

});

function scanUser() {
  console.log("ユーザー一覧取得")
  const lists = document.getElementById("lists");
  const dataOfScan = { OperationType: 'SCAN', };
  fetch('https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataOfScan),
  })

    .then(response => response.json())
    .then(data => {
      // jsonのデータ使ってやりたい処理
      console.log(data.Items)
      data.Items.forEach(function (item) {
        // <li></li>をつくる
        const list = document.createElement("li");
        list.innerText = item.profile;

        // それをhtmlファイルのulタグの中にぶちこむ
        lists.appendChild(list);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function putUser() {
  console.log("ユーザー追加")
  const dataOfPut = {
    OperationType: 'PUT',
    Keys: {
      userID: "005",// partation
      age: 20,
      image: "さんぷる画像です",
      password: "qwerty",
      point: 334,
      profile: "てすと　する　あらい",
      user_name: "オニャンコポン",
    }
  };

  console.log("ユーザー新規作成のテスト")
  fetch('https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataOfPut),
  })
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function searchUser() {
  console.log("ユーザー検索")
  const jsonData = {
    OperationType: 'QUERY', Keys: {
      userID: "004"
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
      // 検索結果が複数の場合も対応できる
      data.Items.forEach( function (item) {
        console.log('検索結果', item.user_name);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}