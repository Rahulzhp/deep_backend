const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    tasks: { type: Array }

})

const PostModel = mongoose.model("posts", PostSchema)

module.exports = {
    PostModel
}