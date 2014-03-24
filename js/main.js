$(document).ready(function() {
    // generate our countdown dates
    var countdownXP  = new Date();
    var countdown2k3 = new Date();
    
    countdownXP  = new Date(2014, 3, 8);
    countdown2k3 = new Date(2015, 6, 14);
    
    // make our countdown object and insert it into the dom.
    // serverSync wants a call back, it will use my function to pull time from the server
    $('#countdownXP').countdown( {until: countdownXP,  serverSync: serverTime});
    $('#countdown2k3').countdown({until: countdown2k3, serverSync: serverTime});
    
    // this function iniates an AJAX call to the server to get time. If it fails it pulls time from the client.
    function serverTime() { 
        var time = null; 
        $.ajax({url: 'http://xpdeathclock.maxmahem.net/serverTime.php', 
            async: false, dataType: 'text', 
            success: function(text) { 
                time = new Date(text); 
            },
            error: function(http, message, exc) { 
                time = new Date(); 
            }
        }); 
        
        return time; 
    }
    
    // wait 30 seconds and then change the background!
    setTimeout(function(){
        $('body').addClass('anti');
    }, 15000);
});
