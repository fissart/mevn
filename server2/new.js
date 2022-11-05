const ww_w=require('express');
const w1=require('mongoose');
const www=ww_w();
//www.connect('mongodb://localhost:27017/www');
www.use("/api/links", require("./routes/www.route"));


www.get('/', function (req,res){
  res.send('wwwwwwwwwwwwwwwwwwww')
})

w1.connect('mongodb://localhost/fisart', { useNewUrlParser: true }, (err, res) => {
	err && console.log('No conect');
	www.listen(9000, () => {
		console.log('ok');
	});
});

//ww.listen(9000)
