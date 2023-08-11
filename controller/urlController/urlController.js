const shortID = require("shortid");
const moment = require("moment");
const URL = require("../../models/urlModel/urlModel");

const handelURLPostController = async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: "url is required" });
    // const shortID = shortId();
    const shortURL = await new URL({
      shortId: shortID.generate().toLowerCase(),
      redirectURL: url,
      visitHistory: [],
    });
    await shortURL.save();
    return res.json({ shortURL, shortId: shortURL.shortId });
  } catch (error) {
    next(error);
  }
};

const handelURLRedirectGetController = async (req, res, next) => {
  try {
    const { shortId } = req.params;
    const urlIDs = await URL.findOne({ shortId });
    if (!urlIDs) {
      return res.status(404).json({ error: "resources not found" });
    }
    // if (urlIDs.visitHistory.length === 10) {
    //   return res.status(408).json({
    //     message: `Your url ${urlIDs.redirectURL} limit is over. You need to now signup and try again.`,
    //   });
    // }
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: moment().format("LLLL").toLowerCase(),
          },
        },
      }
    );

    return res.redirect(entry.redirectURL);
    // res.json(entry);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  handelURLPostController,
  handelURLRedirectGetController,
};
