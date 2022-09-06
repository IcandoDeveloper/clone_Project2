// modules
const { Op } = require('sequelize');

//models
const { Comments, Likes, Posts, Users } = require('../models');

//메인페이지 작성
const writePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//메인페이지 전체 조회
const allPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//메인페이지 1개 조회
const onePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//메인페이지 삭제
const deletePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//좋아요
const likePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//공유하기
const sharePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//임시저장
const tempPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//검색기능
const searchPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//최신글 보여주기
const recentPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//마이페이지
const mypage = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//이미지업로드
const uploadImage = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//이미지 제거
const deleteImage = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//test
module.exports = {
  writePost,
  allPost,
  onePost,
  deletePost,
  likePost,
  sharePost,
  tempPost,
  searchPost,
  recentPost,
  mypage,
  uploadImage,
  deleteImage,
};
