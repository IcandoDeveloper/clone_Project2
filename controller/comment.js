// modules
const { Op } = require('sequelize');

//models
const { Comments, Likes, Posts, Users } = require('../models');

//댓글조회
const getComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//댓글작성
const writeComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//댓글수정
const editComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//댓글삭제
const deleteComment = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

module.exports = {
  getComment,
  writeComment,
  editComment,
  deleteComment,
};
