

$.get('./user.json').then(function (data) {
    $.get('./group.json?id=' + data.id).then(function (data) {
        $.get('./group_member.json?id=' + data.id).then(function (data) {
            $("#class11").text(data[0].name + ' ' + data[1].name);
        }, onError);
        $("#groups").text(data[0].name + ' ' + data[1].name);
    }, onError);
    $("#user").text(data.name);
}, onError);

function onError() {
    console.log("error");
}