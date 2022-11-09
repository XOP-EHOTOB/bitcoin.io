require('dotenv').config()
const  BlockIo  =  require ( 'block_io' ) ; 
const  block_io  =  new  BlockIo (process.env.BITCOIN_KEY) ; 
const express = require('express')
const app = express()

app.get('/api/bitcoin', function (req, res) {
    res.send('ok')
    console.log(req.body);
})
  
app.listen(process.env.PORT)


const start = async () => {
    let balance = await block_io.get_balance();
    //console.log(balance);
    let addresses = await block_io.get_my_addresses();
    //console.log(addresses.data);
    let prices = await block_io.get_current_price({ price_base: 'USD' });
    //console.log(prices.data.prices);
}

block_io.create_notification({ type: 'account', url: 'http://' + process.env.IP + ':' + process.env.PORT + '/api/bitcoin' });


start()

console.log("APP STARTED");