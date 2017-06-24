/**
 * Created by admin on 10/06/2017.
 */
$.('form').on('submit', function (event) {
    event.preventDefault();
    $('form input[type=submit]').prop('disable', true);
    $.post('./user.json', {username: 'xxx'})
        .then(data => {
        console.log(data);
        }, xhr => {
        console.log(xhr.status);
        })
        .then(data => {
            console.log('success twice');
            $('form input[type=submit]').prop('disable', false);
    })
})