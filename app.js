const express = require("express");
const connect = require("./schemas");
const app = express();
const port = 3000;


connect();

const goodsRouter = require("./routes/goods");


const requestMiddleware = (req, res, next)=>{
    console.log("Request URL: ", req.originalUrl," - ", new Date());
    next();
}

app.use(express.urlencoded());
app.use(express.static("static"));
app.use(express.json());
app.use(requestMiddleware);

app.use("/api", [goodsRouter]);


app.get("/", (req, res) => {            ///겟이라는 http 메소드로 이 경로로 들어오면 {} 내용르 실행하겟음
    res.send("Hello World @@@@@@");
});


app.listen(port, () => {                          ///서버를 이포트로 키겟다 라는 뜻
    console.log(port, "포트로 서버가 켜졌어요! ");
});