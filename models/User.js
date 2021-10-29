const DBconnect = require('../database/DBconnection')

const User = {
    create : async ({name,uid,password,phone},callback)=>{
        query = `insert into kissan(name,uid,password,phone_no) values("${name}",${uid},"${password}",${phone})`
        DBconnect.query(query,(err)=>{
            if(err) callback(err,null);
            else{
                callback(null,true)
            }
        })
    },
    findOne:async ({uid},callback)=>{
        query = `select * from kissan where uid = ${uid}`
        DBconnect.query(query,(err,data)=>{
            if(err) callback(err,null);
            else{
                if(data.length == 0){
                    callback(null,null)
                }else{
                    callback(null,data[0])
                }
            }
        })
        
    },
    findPassword:async ({uid},callback)=>{
        DBconnect.query(`select * from kissan where uid = ${uid}`,(err,data)=>{
            if(err) callback(err,null);
            else{
                if(data.length == 0){
                    callback(false)
                }else{
                    callback(null,data[0].password)
                }
            }
        })
        
    }
};

module.exports = User;