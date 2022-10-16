const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middleware/authMiddleWare');

const {
  signUp,
  login,
  loginCheck,
  setting,
  getSetting,
} = require('../controller/user');

const {
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
} = require('../controller/post');

const {
  getComment,
  writeComment,
  editComment,
  deleteComment,
} = require('../controller/comment');

//회원가입
router.post('/user/signup', signUp);

//로그인
router.post('/user/login', login);

//로그인체크
router.get('/user/islogin', authMiddleWare, loginCheck);

//추가 데이터 만들기
router.post('/user/setting', authMiddleWare, setting);

//추가 데이터 조회
router.get('/user/setting', authMiddleWare, getSetting);

//메인페이지 작성
router.post('/post/write', authMiddleWare, writePost);

//메인페이지 전체 조회
router.get('/post/main', authMiddleWare, allPost);

//메인페이지 1개 조회
router.get('/post/:postId', authMiddleWare, onePost);

//메인페이지 삭제
router.delete('/post/delete/:postId', authMiddleWare, deletePost);

//좋아요
router.post('/post/like/:postId', authMiddleWare, likePost);

//공유하기
router.post('/post/share', sharePost);

//임시저장
router.post('/post/tempwrite', authMiddleWare, tempPost);

//검색기능
router.get('/post/search', searchPost);

//최신글 보여주기
router.get('/post/recent', recentPost);

//마이페이지
router.get('/post/mypage', authMiddleWare, mypage);

//이미지업로드
router.post('/post/image', authMiddleWare, uploadImage);

//이미지 제거
router.delete('/post/image', authMiddleWare, deleteImage);

//댓글조회
router.get('/post/main/:postId', getComment);

//댓글작성
router.post('/comment/write', authMiddleWare, writeComment);

//댓글수정
router.patch('/comment/edit', authMiddleWare, editComment);

//댓글삭제
router.delete('/comment/delete', authMiddleWare, deleteComment);

module.exports = router;
