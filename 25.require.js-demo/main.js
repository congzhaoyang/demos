require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "./node_modules/jquery/dist/jquery.min.js"],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        console.log("load finished");  
    })
})