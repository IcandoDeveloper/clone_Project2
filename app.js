const express = require('express');
const app = express();
const { sequelize } = require('./models');
const { seokil } = require('./models');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/seoul');
const bodyParser = require('body-parser');
const routers = require('./routes');
const cors = require('cors');
app.use(bodyParser.json());

sequelize
  .sync({ force: false }) // sync 메소드로 인해 서버 실행 시 mysql과 연동
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.log(err, '데이터베이스 연결 실패');
  });

// 접속 로그 남기기
const requestMiddleware = (req, res, next) => {
  console.log(
    '[Ip address]:',
    req.ip,
    '[method]:',
    req.method,
    '[Request URL]:',
    req.originalUrl,
    ' - ',
    moment().format('YYYY-MM-DD HH:mm')
  );
  next();
};
// 각종 미들웨어 추가
app.use(cors());
app.use('/api', routers);
app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(requestMiddleware);
app.use(express.static('uploads'));

app.post('/api', async (req, res) => {
  // console.log(db)
  try {
    const { userId, password, email, test1 } = req.body;
    // console.log(password)
    // const userId = '4'
    // const password = '1'
    // const email = '2'
    // const test1 = '3'
    console.log('aaaa');
    await seokil.create({ userId, password, email, test1 });
    res.status(201).json({ result: true, userId, password, email, test1 });
  } catch (error) {
    console.log(error);
    res.status(400).json({ result: false });
  }
});

app.listen(3000, () => {
  console.log('start app : localhost:3000');
});
