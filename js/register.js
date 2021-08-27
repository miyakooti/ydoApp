



window.addEventListener("load", async function () {

});

document.getElementById("register-button").onclick = function () {
  const userID = document.getElementById("user-id").value
  const password = document.getElementById("password").value
  const age = document.getElementById("age").value
  const profile = document.getElementById("profile").value

  const jsonData = {
    OperationType: 'PUT',
    Keys: {
      userID: userID,// partation
      age: age,
      image: "hogehoge",
      password: password,
      point: 0,
      profile: profile,
      user_name: "hgoehoge",
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

// function returnUserID() {
//   window.sessionStorage.setItem("userID", "004")
//   const userID = window.sessionStorage.getItem("userID");
//   return userID
// }