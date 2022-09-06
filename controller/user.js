// modules
const { Op } = require('sequelize');

//models
const { Comments, Likes, Posts, Users } = require('../models');

//회원가입
const signUp = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//로그인
const login = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//로그인체크
const loginCheck = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//추가 데이터 만들기
const setting = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//추가 데이터 조회
const getSetting = async (req, res) => {
  try {
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
