/**
 * Created by admin on 07/06/2017.
 */

/*
$.get('./data.json', function (data, statusText, xhr) {
    console.log(data);
    console.log(statusText);
    console.log(xhr);
})
*/

$.ajax({
    url: './user.json',
    method: 'get',
    success: function (data, statusText, xhr) {
        console.log(data);
        $("#user").text(data.name);
        $.ajax({
            url: './group.json?id=' + data.id,
            method: 'get',
            success: function (data) {
                $('#groups').text([data[0].name, data[1].name].join(','));
                $.ajax({
                    url: 'group_member.json?group_id=' + data[0].id,
                    method: 'get',
                    success: function (data) {
                        $('#class11').text([data[0].name, data[1].name].join(','));
                    }
                })
            },
            error: function (error) {
                console.log(error);
            }
        })
    },
    error: function (xhr, statusText, reason) {
        console.log(xhr.status);
        console.log(statusText);
        console.log(reason);
    }
})