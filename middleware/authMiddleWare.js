const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Users } = require('../models');
const user = require('../models/user');

module.exports = (req, res, next) => {
  const Token = req.headers.authorization;
  console.log('헤더에 담긴 토큰 값 :', Token);
  // console.log(Token == undefined);
  if (Token == undefined) {
    res.status(401).send({ code: 401, message: 'fail 토큰이 없습니다' });
  }
  const logInToken = Token.replace('Bearer ', '');

  try {
    const { userId } = jwt.verify(logInToken, process.env.TOKEN_KEY);
    // console.log(userId);
    // const { userId } = token;

    Users.findOne({
      where: { userId },
    }).then((userInfo) => {
      // console.log(userInfo);
      // DB에 있는 유저 정보
      res.locals.userInfo = {
        id: userInfo.id,
        userId: userInfo.userId,
        nickname: userInfo.nickname,
        velogtitle: userInfo.velogtitle,
        email: userInfo.email,
        gitaddress: userInfo.gitaddress,
      };

      // 로그인 토큰 값
      res.locals.token = logInToken;
      next();
    });
  } catch (error) {
    console.log('authMiddleWare.js에서 에러남');
    console.log(error);
    return res.status(401).json({ msg: '토큰이 유효하지 않습니다.' });
  }
};
