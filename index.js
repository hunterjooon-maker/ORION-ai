const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ORION AI</title>
      </head>
      <body style="background:#101827;color:white;text-align:center;font-family:Arial;padding:40px">
        <h1>🚀 ORION AI</h1>
        <h2>مرحباً بك في مساعدك الذكي</h2>
        <p>مستقبلك يبدأ من هنا</p>
        <input id="msg" placeholder="اكتب سؤالك هنا" style="padding:14px;width:85%">
        <button onclick="send()" style="padding:14px">إرسال</button>
        <p id="answer"></p>
        <script>
          async function send(){
            const msg=document.getElementById("msg").value;
            document.getElementById("answer").innerText="أهلاً بك في ORION AI!";
          }
        </script>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("ORION AI is running"));
