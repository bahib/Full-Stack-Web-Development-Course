const express = require('express');
const router = express.Router();
const { Comments } = require('../models');

router.get('/', async (req, res) => {
    const listOfComments = await Comments.findAll();
    res.json(listOfComments);
});

router.get('/byPostId/:id', async (req, res) => {
    const id = req.params.id;
    const comments = await Comments.findAll({ where: { PostId: id } });
    res.json(comments);
}
);





module.exports = router;