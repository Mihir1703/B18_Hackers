const DBconnect = require('../database/DBconnection')

let Crop = {
    getDataByCrop: (crop,dist,callback) => {
        DBconnect.query(`select * from crop_data where crop = "${crop}" and district = "${dist}"`,(err,data)=>{
            if(err) callback(err,null)
            else{
                callback(null,data)
            }
        })
    }
}

module.exports = Crop