// modules
const { Op } = require('sequelize');

//models
const { Comments, Likes, Posts, Users } = require('../models');

//메인페이지 작성
const writePost = async (req, res) => {
  try {
    const { userInfo } = res.locals;
    console.log(userInfo);
    const { title, content } = req.body;
    const post = await Posts.create({
      title,
      content,
      writer: userInfo.nickname,
      id: userInfo.id,
    });
    console.log(post);
    res.status(200).send({
      code: 200,
      message: 'true',
      posts: post,
    });
  } catch (error) {
    res.status(400).send({ code: 400, message: 'fail' });
  }
};

//메인페이지 전체 조회
const allPost = async (req, res) => {
  try {
    const post = await Posts.findAll({
      // where: { userId: String(userId), nickname: String(nickname) },
    });
    //배열 푸는 코드
    // let post1;
    // Object.values(post).forEach((num, i) => {
    //   post1 = num;
    // });
    res.status(200).send({ code: 200, message: 'true', posts: post });
  } catch (error) {
    res.status(400).send({ code: 400, message: 'fail' });
  }
};

//메인페이지 1개 조회
const onePost = async (req, res) => {
  try {
    const { userInfo } = res.locals;
    console.log(userInfo);
    //아래 커리부분과 where절을 비워도 같은결과가 나오는데 필요한코드인지?
    const { postId } = req.params;
    console.log(postId);
    const post = await Posts.findOne({ where: { postId } });
    res.status(200).send({ code: 200, message: 'true', posts: post });
  } catch (error) {
    res.status(400).send({ code: 400, message: 'fail' });
  }
};

//메인페이지 삭제
const deletePost = async (req, res) => {
  try {
    const { userInfo } = res.locals;
    console.log(userInfo);
    const { postId } = req.params;

    const post = await Posts.findOne({
      where: { postId },
    });
    // 게시물이 있는 경우
    if (post) {
      //
      await Posts.destroy({
        where: { postId },
      });
      res.status(200).json({ msg: 'true 게시물을 삭제하였습니다' });
    }
    // 게시물이 없는 경우
    else {
      res.status(404).json({ msg: '해당 게시물이 존재하지 않습니다.' });
    }
  } catch (error) {
    res.status(400).send({ code: 400, message: 'fail' });
  }
};

//좋아요
const likePost = async (req, res) => {
  try {
    const { userInfo } = res.locals;
    const userId = userInfo.userId;
    console.log(userInfo);
    const { postId } = req.params;
    // const like = await Likes.create({
    //   userId,
    //   postId,
    // });
    // console.log(post);
    // console.log(like);
    // const existLike =
    await Likes.findOne({
      where: { userId, postId },
    });
    // 좋아요 있는 경우
    if (like) {
      //
      await Likes.destroy({
        where: { userId, postId },
      });
      res.status(200).json({ msg: 'true 좋아요가 취소되었습니다' });
    }
    // 좋아요가 없는 경우
    else {
      await Likes.create({
        userId,
        postId,
      });
      res.status(404).json({ msg: '좋아요' });
    }
    res.status(200).send({
      code: 200,
      message: 'true',
      posts: post,
    });
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//공유하기
const sharePost = async (req, res) => {
  try {
    res.status(200).send({ code: 200, message: 'true' });
  } catch (error) {
    res.status(400).send({ code: 400, message: 'fail' });
  }
};

//임시저장
const tempPost = async (req, res) => {
  try {
    const { userInfo } = res.locals;
    console.log(userInfo);
    const { title, content } = req.body;
    const writer = userInfo.nickname;
    const is_saved = true;
    const samePost = await Posts.findOne({ title, content, writer, is_saved });
    if (!samePost) {
      const newPost = await Posts.create({
        title,
        content,
        writer,
        is_saved,
      });
      await Posts.findone({ where: { postId: newPost.postId } });
      res.status(200).send({ code: 200, message: 'true', post });
    } else {
      await Posts.destroy({
        where: { title, content, writer, is_saved },
      });
    }
    res.status(200).send({ code: 200, message: 'true' });
  } catch (error) {
    res.status(400).send({ code: 400, message: '올바르지 않는 정보' });
  }
};

//검색기능
const searchPost = async (req, res) => {
  try {
    const { word } = req.params;
    const post = await Posts.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: '%' + word + '%' } },
          { content: { [Op.like]: '%' + word + '%' } },
        ],
      },
    });
    res.status(200).send({ code: 200, message: 'true' });
  } catch (error) {
    res.status(400).send({ code: 400, message: 'fail' });
    console.log(error);
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
