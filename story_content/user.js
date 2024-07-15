window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

$.ajax({
    url: "https://script.google.com/macros/s/AKfycbwPpHxpTcDNTgV-BMSP8rxFKFlhP1KRAn3EJoP2hemYNhlAqtV2GGmhYRNcY3TAPqY6/exec",
    type: "POST",
    data: {
        "date" : new Date().toJSON().slice(0,10), 
        "IdNumber": player.GetVar("IdNumber"),
        "FullName": player.GetVar("FullName"),
        "Age": player.GetVar("Age"),
        "PuntajePerfil": player.GetVar("PuntajePerfil"),
        
    },
    success: function(data) {
        if (data.Timestamp) {
            console.log("Timestamp:", data.Timestamp);
        }
        console.log(data);
    },
    error: function(err) {
        console.log('Error:', err);
    }
});

return false;
}

window.Script2 = function()
{
  var player = GetPlayer();

$.ajax({
    url: "https://script.google.com/macros/s/AKfycbwPpHxpTcDNTgV-BMSP8rxFKFlhP1KRAn3EJoP2hemYNhlAqtV2GGmhYRNcY3TAPqY6/exec",
    type: "POST",
    data: {
        "date" : new Date().toJSON().slice(0,10), 
        "IdNumber": player.GetVar("IdNumber"),
        "FullName": player.GetVar("FullName"),
        "Age": player.GetVar("Age"),
        "PuntajePerfil": player.GetVar("PuntajePerfil"),
        
    },
    success: function(data) {
        if (data.Timestamp) {
            console.log("Timestamp:", data.Timestamp);
        }
        console.log(data);
    },
    error: function(err) {
        console.log('Error:', err);
    }
});

return false;
}

window.Script3 = function()
{
  var player = GetPlayer();

$.ajax({
    url: "https://script.google.com/macros/s/AKfycbwPpHxpTcDNTgV-BMSP8rxFKFlhP1KRAn3EJoP2hemYNhlAqtV2GGmhYRNcY3TAPqY6/exec",
    type: "POST",
    data: {
        "date" : new Date().toJSON().slice(0,10), 
        "IdNumber": player.GetVar("IdNumber"),
        "FullName": player.GetVar("FullName"),
        "Age": player.GetVar("Age"),
        "PuntajePerfil": player.GetVar("PuntajePerfil"),
        
    },
    success: function(data) {
        if (data.Timestamp) {
            console.log("Timestamp:", data.Timestamp);
        }
        console.log(data);
    },
    error: function(err) {
        console.log('Error:', err);
    }
});

return false;
}

};
