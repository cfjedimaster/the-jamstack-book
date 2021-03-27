module.exports = (req, res) => {
	let name = req.query.name || "World";

	res.json({
		message:`Hello ${name}`
	})
}