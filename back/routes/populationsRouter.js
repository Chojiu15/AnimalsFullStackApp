const populationsRouter = require("express").Router();
const connection = require("../conf");

populationsRouter.get("/", (req, res) => {
  connection.query("SELECT * FROM population_years", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

populationsRouter.get('/country/:country/:year', (req, res) => {
    const {country, year} = req.params
    connection.query(`SELECT * FROM population_years WHERE country = ? AND year = ?`, [country, year], (err, results) => {
        if(err) throw err
        res.send(results)
    })
})

populationsRouter.post('/', (req, res) => {
    const newCountry = req.body
    connection.query(`INSERT into population_years SET ?`, newCountry, (err, results) => {
        if(err) throw err
        res.send(results)
    })
})


module.exports = populationsRouter;
