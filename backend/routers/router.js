const { Router } = require("express");
const { connectWithChatBot } = require("../controllers/chat.js");
<<<<<<< HEAD
// const { doAnalysis, getAnalysis } = require("../controllers/analysis.js");     {To be used later}
=======
// const { doAnalysis, getAnalysis } = require("../controllers/analysis.js");
>>>>>>> aa3062e89149f7e49baa185689413004fc25e69e
const { userMiddleware } = require("../middlewares/genUserId.js");
const { signup, login, isUser, logout } = require("../controllers/user.js");

const router = Router();
router.route("/cron").get((req, res) => {
  res.status(200).json({ message: "hello" });
});
router.route("/chat").get(userMiddleware, connectWithChatBot);
// router.route("/analysis").get(userMiddleware, doAnalysis);              {To be used later}
// router.route("/fetchanalysis").get(userMiddleware, getAnalysis);        {To be used later}
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/isUser").get(isUser);
router.route("/logout").get(logout);

module.exports = router;
