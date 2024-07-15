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
    url: "https://script.google.com/macros/s/AKfycbyxH5uQhEACmohD4wxCxjEzlvUpRfsPYvySKMWZJ6IhlRnesRU4nfz1RtD0jvb3ZUOtRw/exec",
    type: "POST",
    data: {
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
    url: "https://script.google.com/macros/s/AKfycbyxH5uQhEACmohD4wxCxjEzlvUpRfsPYvySKMWZJ6IhlRnesRU4nfz1RtD0jvb3ZUOtRw/exec",
    type: "POST",
    data: {
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
    url: "https://script.google.com/macros/s/AKfycbyxH5uQhEACmohD4wxCxjEzlvUpRfsPYvySKMWZJ6IhlRnesRU4nfz1RtD0jvb3ZUOtRw/exec",
    type: "POST",
    data: {
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
