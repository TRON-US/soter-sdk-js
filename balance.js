var Interfake = require('interfake');
var interfake = new Interfake();
interfake.get('/api/v1/balance')
    .status(200)
    .body({ code: 0, message: "success", balance: "100.01"});
interfake.listen(30002);