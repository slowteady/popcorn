const Collection = require("../databases/models/Collections");

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

const getCollection = async (req, res) => {
  try {
    const page = req.params.page - 1;
    const limit = req.query.limit;
    const skip = page * limit;

    const response = await Collection.find()
      .sort({ rgstDate: -1 })
      .skip(skip)
      .limit(limit);

    const obj = response.map((m) => ({
      id: m._id,
      user: m.user,
      collectionTitle: m.collectionTitle,
      rgstDate: m.rgstDate,
    }));

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

const getDetailCollection = async (req, res) => {
  try {
    const id = req.params.id;
    const page = req.query.page - 1;
    const limit = parseInt(req.query.limit, 10);
    const skip = parseInt(page * limit, 10);

    const response = await Collection.findOne({ _id: id }).select({
      movie: { $slice: [skip, limit] },
    });

    const obj = { ...response.toObject() };
    obj.movie = obj.movie.map((m) => {
      let date = new Date(m.release_date);
      let dateString = date.toISOString().substring(0, 10);
      const release_date = dateString;

      return { ...m, release_date };
    });

    res.status(200).json({ isSuccess: true, collection: obj });
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);
    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

const deleteCollection = async (req, res) => {
  try {
    const id = req.query.id;

    const response = await Collection.deleteOne({ _id: id });
    const { acknowledged, deletedCount } = response;
    const obj = {};

    if (acknowledged && deletedCount > 0) {
      obj.isSuccess = true;
    }

    res.status(200).json(obj);
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);
    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

const getPreCollection = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Collection.findOne({ _id: id });
    const obj = { ...response.toObject() };

    obj.movie = obj.movie.map((m) => {
      let date = new Date(m.release_date);
      let dateString = date.toISOString().substring(0, 10);
      const release_date = dateString;

      return { ...m, release_date };
    });

    res.status(200).json({ isSuccess: true, collection: obj });
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);
    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

const editCollection = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const response = await Collection.findByIdAndUpdate(id, body, {
      new: true,
    });

    const obj = {};
    if (response.movie && response.movie.length > 0) {
      obj.isSuccess = true;
      obj.msg = "컬렉션이 수정되었어요";
    }

    res.status(200).json(obj);
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);
    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

module.exports = {
  registerCollection,
  getCollection,
  getDetailCollection,
  deleteCollection,
  editCollection,
  getPreCollection,
};
