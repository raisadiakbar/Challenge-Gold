exports.getAllOrder = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mendapatkan Order'
  })
}

exports.getOrder = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mendapatkan Order dengan id ' + req.params.id
  })
}

exports.createOrder = async (req, res) => {
  return res.status(201).json({
    message: 'Berhasil membuat Order'
  })
}

exports.updatePost = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil mengubah Order'
  })
}

exports.deleteOrder = (req, res) => {
  return res.status(200).json({
    message: 'Berhasil menghapus Order'
  })
}