// MFJD Cloud Platform 登录

const API_BASE = "https://mfjd-001.aly16888.workers.dev";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", login);

async function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    msg.style.color = "black";
    msg.innerHTML = "正在登录，请稍候...";

    try {

        const response = await fetch(API_BASE + "/api/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })

        });

        const data = await response.json();

        if (data.success) {

            msg.style.color = "green";
            msg.innerHTML = "✅ 登录成功！";

            localStorage.setItem("token", data.token);

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);

        } else {

            msg.style.color = "red";
            msg.innerHTML = "❌ " + data.message;

        }

    } catch (err) {

        console.error(err);

        msg.style.color = "red";
        msg.innerHTML = "❌ 无法连接服务器";

    }

}
