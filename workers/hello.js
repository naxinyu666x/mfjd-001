export default {
  async fetch(request) {

    const data = {
      project: "MFJD Cloud Platform",
      version: "1.0",
      status: "online",
      message: "欢迎使用 MFJD Cloud Platform API",
      time: new Date().toISOString()
    };

    return new Response(
      JSON.stringify(data, null, 2),
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      }
    );

  }
}
