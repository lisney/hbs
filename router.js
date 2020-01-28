module.exports = function(app){
    app.get('/',(req,res)=>{
        res.render('index',{home:true,
            list:['home','school','church']
        })
    })
    app.get('/features',(req,res)=>{
        res.render('features',{contact:true})
    })
    app.get('/contact',(req,res)=>{
        res.render('contact',{features:true})
    })

}