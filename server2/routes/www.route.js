const ww_w=require('express');
const User = require("./www0.route");

const w1=ww_w.Router();


w1.get('/', async (w_1,w_2)=>{
  //console.log(w_1);
  //w_2.send('ww w w w wwwwwwwwwwwwwwwwwwwww w w ww wwwww wwww ww')
  const instance = await User.find({});
  w_2.json(instance);  // 'hello'
})


module.exports = w1;
