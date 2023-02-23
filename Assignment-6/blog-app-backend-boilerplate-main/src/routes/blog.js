const router = require("express").Router();
const Blog = require("../models/Blog");

// Your routing code goes here

// router.get('/blog',(req,res)=>{
//     res.json({ok:'blog'})
// })
router.post("/blog", async (req, res) => {
  const { id, topic, description, posted_At, posted_By } = req.body;
  try {
    const blog = await Blog.create({
      id: id,
      topic: topic,
      description: description,
      posted_At: posted_At,
      posted_By: posted_By,
    });
    // await blog.save();
    res.status(200).json({
      Status: "Success",
      res: blog,
    });
  } catch (error) {
    res.status(400).send("Unable to send");
  }
});

router.get("/blog", async (req, res) => {
  try {
    const { search, page } = req.query;
    let blog;
    if (search && page) {
      blog = await Blog.find({ topic: search }).limit(page * 5);
      res.status(200).json({
        status: "Success",
        result: blog,
      });
    } else if (search) {
      blog = await Blog.find({ topic: search });
      res.status(200).json({
        status: "Success",
        result: blog,
      });
    } else if (page) {
      blog = await Blog.find({}).limit(page * 5);
      res.status(200).json({
        status: "Success",
        result: blog,
      });
    } else {
      blog = await Blog.find({});
      res.status(200).json({
        status: "Success",
        result: blog,
      });
    }
  } catch (error) {
    res.status(422).json({
      status: "Failed",
      error: error.error,
    });
  }
});

router.put("/blog/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findOneAndUpdate({id:id},req.body);
        res.status(200).json({
            status:"Success",
            result : blog
        })
    } catch (error) {
        
    }
});

router.delete("/blog/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findOneAndDelete({id:id});
        res.status(200).json({
            status:"Success",
            result : blog
        })
    } catch (error) {
        
    }
})
module.exports = router;
