// 投稿一覧取得→scanPost()を流用
// 投稿する機能→putPost()を流用
// 投稿を検索する機能→searchPost()を流用
// ポイント増加させる機能→下の方で未完成のinclementUsersPoint()がある
// 投稿DBのいいね数増加機能→inclementUsersPoint()を流用　実装ヒントも同じ

window.addEventListener("load", async function () {

  scanPost();
  // putPost()
  // inclementUsersPoint();
  // console.log("保存されたPostIDは", returnPostID());

});



// document.getElementById("post").onclick = function () {
//   console.log("ボタンを押して検索します。")
//   const PostID = document.getElementById("PostID").value
//   searchPost(postID)
// }

document.getElementById("post").onclick = function () {
  // searchUser(returnUserID)
  searchUser("004")
}


// ユーザー情報はinputタグからもってくる
function putPost() {

}

// userIDはinputタグからもってくる　多分ログイン周りやマイページで使う　最悪マイページでも入力させて表示する。
function searchUser(id) {
  console.log("ユーザー検索")
  console.log(id)
  const Data = {
    OperationType: 'QUERY', Keys: {
      userID: id
    }
  }
  fetch('https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Data),
  })
    .then(response => response.json())
    .then(data => {

      const sentense = document.getElementById("textarea").value
      console.log(sentense)

      // 検索結果が複数の場合も対応できる。これは投稿で使う
      data.Items.forEach(function (item) {
        console.log('検索結果', item.user_name);
        console.log("投稿追加")
        const jsonData = {
          OperationType: 'PUT',
          Keys: {
            postID: "005",
            userID: item.userID,
            user_name: item.userID,
            age: item.age,
            timestamp: "hogehoge",
            image: "hogehoge",
            sentence: sentense,
            image_icon: "hogehoge",
            good: 0
          }
        };
        console.log("ここまではKO");

        fetch('https://vefjo6rdrl.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-posttable/intern-groupb-posttable', {

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


      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


function scanPost() {
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

      item = data.Items[data.Items.length-1]
    
      console.log(item.sentence)

    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


// 実装するときは投稿のpostIDでpostTableを検索して、
// それの情報全部持ってきて、pointだけ+10してputする処理を書けばいける。
// function inclementUsersPoint() {
//   console.log("ユーザー更新")
//   const jsonData = {
//     OperationType: 'PUT',
//     Keys: {
//       postID: "005",// partation
//       userID: "002",
//       user_name: "オニャンコポン",
//       age: 20,
//       timestamp: timestamp,
//       image: "WWWW",
//       sentence: "oui",
//       image_icon: "GGAGAGSHCA",
//       good:66
//     }
//   };

//   fetch('https://vefjo6rdrl.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-posttable/posttable', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(jsonData),
//   })
//     .then(response => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

function returnUserID() {
  const userID = window.sessionStorage.getItem("userID");
  return userID
}