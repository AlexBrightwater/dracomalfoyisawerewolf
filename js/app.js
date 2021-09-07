(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-67141017-1', 'auto');
    ga('send', 'pageview');


/*Wolfhowl*/ 
//Wie oft geklcikt wurde
var w_clicks = 0;
//zähle, wie oft geklcikt wurde
function clickCount(){
    w_clicks = w_clicks + 1;
    //spiele Awoo, wenn 7x geklickt
    var audio = new Audio('media/awoo.mp3')
    if(w_clicks == 7){
        audio.play();
    }
}