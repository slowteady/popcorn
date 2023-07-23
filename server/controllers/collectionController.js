const Collection = require("../databases/models/Collections");

// 컬렉션 등록
const registerCollection = async (req, res) => {
  try {
    const collection = new Collection({
      userId: req.user._id,
      collectionTitle: req.body.collectionTitle,
      movie: req.body.movie,
    });

    await collection.save();
    res.status(200).json({ isSuccess: true });
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);
    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

module.exports = {
  registerCollection,
};
