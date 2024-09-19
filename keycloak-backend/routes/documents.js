import express from "express";

const router = express.Router();

const data = {
  "satoshi@bitcoin.com": [
    "bitcon",
    "going up"
  ],
};

const getDocuments = async (req, res) => {
  try {
    const email = req.user;
    res.status(200).send(data[email]);
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get("/", getDocuments);

export default router;