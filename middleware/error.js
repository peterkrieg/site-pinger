module.exports = {
	notFound (req, res, next) {
		const err = { message: 'API not found.', status: 404 };
		return next(err);
	},
	errorHandler: ({ env }) => (error, req, res, next) => {
		const defaultErrorStatus = 500;

		res.status(error.status || defaultErrorStatus);
		res.json({
			error,
			message: error.message,
		});
	},

};
