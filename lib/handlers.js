const fortune = require('./fortune');
const aray = ['Петя', 'Вася', 'Костя'];
exports.home = (req, res) => res.render('home')
exports.about = (req, res) =>
  res.render('about', { fortune: fortune.getFortune() })
exports.players = (req, res) =>
  res.render('players')
exports.get = (req, res) =>
  res.status(200).send(aray);
exports.post = (req, res) => {
  aray.push(req.body.name);
  res.status(200).send(aray);
}

exports.notFound = (req, res) => res.render('404')
exports.serverError = (err, req, res, next) => res.render('500')