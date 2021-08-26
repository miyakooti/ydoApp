// 投稿一覧取得→scanUser()を流用
// 投稿する機能→putUser()を流用
// 投稿を検索する機能→searchUser()を流用
// ポイント増加させる機能→下の方で未完成のinclementUsersPoint()がある
// 投稿DBのいいね数増加機能→inclementUsersPoint()を流用　実装ヒントも同じ

window.addEventListener("load", async function () {

  scanUser()
  // putUser()
  searchUser()
  inclementUsersPoint()

});

function scanUser() {
  console.log("ユーザー一覧取得")
  const lists = document.getElementById("lists");
  const jsonData = { OperationType: 'SCAN', };
  fetch('https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
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

// ユーザー情報はinputタグからもってくる
function putUser() {
  console.log("ユーザー追加")
  const jsonData = {
    OperationType: 'PUT',
    Keys: {
      userID: "005",// partation
      age: 20,
      image: "さんぷる画像です",
      password: "qwerty",
      point: 344,
      profile: "てすと　する　あらい",
      user_name: "オニャンコポン",
    }
  };

  fetch('https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  })
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// userIDはinputタグからもってくる　多分ログイン周りやマイページで使う　最悪マイページでも入力させて表示する。
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
      // 検索結果が複数の場合も対応できる。これは投稿で使う
      data.Items.forEach(function (item) {
        console.log('検索結果', item.user_name);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

  // 実装するときは投稿のuserIDでuserTableを検索して、
  // それの情報全部持ってきて、pointだけ+10してputする処理を書けばいける。
function inclementUsersPoint() {
  console.log("ユーザー更新")
  const jsonData = {
    OperationType: 'PUT',
    Keys: {
      userID: "005",// partation
      age: 20,
      image: "さんぷる画像です",
      password: "qwerty",
      point: 354 + 10,
      profile: "てすと　する　あらい",
      user_name: "オニャンコポン",
    }
  };

  fetch('https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  })
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}