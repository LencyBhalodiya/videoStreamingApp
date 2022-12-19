import express from 'express';
import { deleteComment, getComment } from '../controllers/comment.js'
import { verifyToken } from '../verifyToken.js';
import {addComment} from '../controllers/comment.js'
const router = express.Router();

router.post('/',verifyToken,addComment)
router.delete('/:id',verifyToken,deleteComment)
router.get('/:videoId',getComment)


export default router;