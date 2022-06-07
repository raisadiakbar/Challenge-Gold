exports.getAllPosts = (req, res) => {
    return res.status(200).json({
        message: 'berhasil mendapatkan Posts'
    })
}

exports.getPosts = (req, res) => {
    return res.status(200).json({
        message: 'berhasil mendapatkan Post dengan id' + req.params.Postid
    })
}

exports.createPosts = (req, res) => {
    return res.status(201).json({
        message: 'berhasil membuat Posts'
    })
}

exports.updatePosts = (req, res) => {
    return res.status(200).json({
        message: 'berhasil mengubah Posts'
    })
}
exports.deletePosts = (req, res) => {
    return res.status(200).json({
        message: 'berhasil menghapus Posts'
    })
}