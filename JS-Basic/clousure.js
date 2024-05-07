function closureDemo()
{
    var x = 10;
    console.log('Parent : ');
     return function(){
        var y = 20;
        console.log('sum : '+ x + y);
     }
}

closureDemo()();