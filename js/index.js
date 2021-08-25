const lists = document.getElementById("lists");

window.addEventListener("load", async function () {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.forEach(function (user) {

        // <li></li>をつくる
        const list = document.createElement("li");
        list.innerText = user.name;

        // それをhtmlファイルのulタグの中にぶちこむ
        lists.appendChild(list);
    });
});