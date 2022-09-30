const jwt = require('jsonwebtoken');
require('dotenv').config();
// modules
const { Op } = require('sequelize');

//models
const { Comments, Likes, Posts, Users } = require('../models');

//회원가입
const signUp = async (req, res) => {
  try {
    const { userId, password, passwordCheck, nickname } = req.body;
    console.log(userId, password, passwordCheck, nickname);
    const userInfo = await Users.create({
      userId,
      password,
      passwordCheck,
      nickname,
    });
    // const signUp = await Users.findOne({ where: { userId } });
    // console.log(userInfo);
    res.status(200).send({
      code: 200,
      message: 'true',
      user: {
        id: userInfo.id,
        userId: userInfo.userId,
        nickname: userInfo.nickname,
      },
    });
  } catch (error) {
    res.status(400).send({ code: 400, message: 'fail' });
  }
};

//로그인
const login = async (req, res) => {
  try {
    const { userId, password } = req.body;
    console.log(userId, password);
    const userInfo = await Users.findOne({ where: { userId, password } });
    console.log(userInfo, userInfo.id, userInfo.userId, userInfo.nickname);
    if (userInfo == null) {
      throw new Error('아이디나 비밀번호를 확인해주세요');
    }
    // 토큰 옵션 설정
    const payload = { userId };
    const secret = process.env.TOKEN_KEY;
    const options = {
      issuer: '백엔드 개발자', // 발행자
      expiresIn: '1d', // 날짜: $$d, 시간: $$h, 분: $$m, 그냥 숫자만 넣으면 ms단위
    };

    const token = jwt.sign(payload, secret, options);
    const user = {
      id: userInfo.id,
      userId: userInfo.userId,
      nickname: userInfo.nickname,
    };
    res
      .status(200)
      .send({ code: 200, message: 'true 로그인 완료', token, user });
  } catch (error) {
    console.log(error);
    res.status(400).send({ code: 400, message: 'fail ' + error.message });
  }
};

//로그인체크
const loginCheck = async (req, res) => {
  try {
    const { userInfo } = res.locals;
    const { id, userId, nickname } = userInfo;
    const loginCheck = await Users.findAll({
      attributes: ['userId', 'nickname'],
      // where: { userId: String(userId), nickname: String(nickname) },
    });
    // console.log(loginCheck);
    res
      .status(200)
      .send({ code: 200, message: 'true', user: { id, userId, nickname } });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ code: 400, message: 'fail' });
  }
};

//추가 데이터 만들기
const setting = async (req, res) => {
  try {
    const { velogtitle, email, gitaddress } = req.body;
    console.log(velogtitle, email, gitaddress);
    const { userInfo } = res.locals;
    console.log(userInfo);
    await Users.update(
      {
        velogtitle,
        email,
        gitaddress,
      },
      {
        where: { userId: userInfo.userId },
      }
    );

    res.status(200).send({ code: 200, message: 'true' });
  } catch (error) {
    console.log(error);
    res.status(400).send({ code: 400, message: 'fail' });
  }
};

// await Comment.update(
//   { comment },
//   {
//     where: { postId, commentId },
//   }
// );

//추가 데이터 조회
const getSetting = async (req, res) => {
  try {
    const { userInfo } = res.locals;
    console.log(userInfo);
    // const getSetting = await Users.findAll({
    //   //   attributes: ['velogtitle', 'email', 'gitadress'],
    //   where: {
    //     userId: userInfo.userId,
    //   },
    // });
    res.status(200).send({ code: 200, message: '성공', user: userInfo });
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

module.exports = {
  signUp,
  login,
  loginCheck,
  setting,
  getSetting,
};
