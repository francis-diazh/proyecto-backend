const errorHandler = (error, req, res, next) => {
    console.error(error.stack)
	// const status = error.status || 500;
	return res.status(500).json({
		status:500,
		method: req.method,
		path: req.url,
		// response: error.toString(),
        response: error.massage
	});
};

export default errorHandler;