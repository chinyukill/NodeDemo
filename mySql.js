const mysql      = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'chenxue'
    });
db.connect((err)=>{
    if(err){
        throw(err);
    }
    console.log("mySql connected...");
})
module.exports={
    test:function(){
        console.log("test import function");
    },
    insert:function(){

    },
    select:function(req,res,keyWord){
        
        var sql = "select * from dept ";
        let param=""
        if(keyWord!=""){
            sql+="where deptNo like ? "
            +" or dName like ? "
            +" or loc like ? ";
            param=[keyWord+"%","%"+keyWord+"%","%"+keyWord+"%"]
        }
        
        let query= db.query(sql,param,(err,result)=>{
            if(err){
                throw err;
            }
            res.send(result);
        })
    }
    
}

 
