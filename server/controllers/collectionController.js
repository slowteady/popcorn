const Collection = require("../databases/models/Collections");

// 컬렉션 등록
const registerCollection = async (req, res) => {
  try {
    const collection = new Collection({
      user: {
        userId: req.user._id,
        userName: req.user.name,
      },
      collectionTitle: req.body.collectionTitle,
      movie: req.body.movie,
    });

    await collection.save();
    res.status(200).json({ isSuccess: true, msg: "컬렉션이 등록되었어요" });
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);
    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

// 컬렉션 목록 조회
const getCollection = async (req, res) => {
  try {
    // 페이지 파라미터
    const page = req.params.page;
    // 페이징 항목 갯수
    const limit = req.query.limit;
    // 번호
    const skip = page * limit;

    const response = await Collection.find()
      .sort({ rgstDate: -1 })
      .skip(skip)
      .limit(limit);

    const obj = response.map((m) => ({
      user: m.user,
      collectionTitle: m.collectionTitle,
      movie: m.movie,
      rgstDate: m.rgstDate,
    }));

    // 문서 총 갯수
    const documentCount = await Collection.countDocuments();
    const totalPages = Math.ceil(documentCount / limit);

    res
      .status(200)
      .json({ isSuccess: true, collection: obj, documentCount, totalPages });
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);
    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

module.exports = {
  registerCollection,
  getCollection,
};
