
async function checkWorker() {
    try {
        const response = await fetch(API_BASE + "/hello");

        const data = await response.json();

        console.log(data);

        alert(
            "Worker 正常\n\n" +
            JSON.stringify(data, null, 2)
        );

    } catch (err) {

        console.error(err);

        alert("Worker 无法连接");
    }
}
