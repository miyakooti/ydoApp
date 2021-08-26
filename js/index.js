const lists = document.getElementById("lists");

window.addEventListener("load", async function () {

    // サーバへ送りたいデータ
    const data = {OperationType:'SCAN'};

    fetch('https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable', {
      mode: 'cors',
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    .then(response => response.json())
    .then(data => {
      // jsonのデータ使ってやりたい処理
      // console.log('Success:', data);
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
});


// window.addEventListener("load", async function () {

//     // サーバへ送りたいデータ
//     const data = {OperationType:"SCAN"};

//     // FetchAPIのオプション準備
//     const param = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         },
//         // リクエストボディ
//         body: JSON.stringify(data)
//     };

//     // paramを付ける以外はGETと同じ
//     fetch("https://s2cuqw4kb4.execute-api.ap-northeast-1.amazonaws.com/intern-groupB-usertable/usertable", param)
//         .then((response) => {
//             console.log(response)
//             return (res.json());
//         })
//         .then((json) => {
//             // ここに何らかの処理
//             console.log(json)
//         });
// });


// window.addEventListener("load", async function () {

//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();

//     users.forEach(function (user) {

//         // <li></li>をつくる
//         const list = document.createElement("li");
//         list.innerText = user.name;

//         // それをhtmlファイルのulタグの中にぶちこむ
//         lists.appendChild(list);
//     });
// });