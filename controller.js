const getFileMetadata = (req, res) => {
	const result = {
		name: req.file.originalname,
		type: req.file.mimetype,
		size: req.file.size,
	};
	res.json(result);
};

module.exports = getFileMetadata;
