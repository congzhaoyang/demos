/**
 * Created by admin on 08/06/2017.
 */


function promiseMaker() {
    return new Promise(function (resolve/*接受*/, reject/*拒绝*/) {
        setTimeout(function () {
            console.log('start');
            let random = Math.random();
            if(random > 0.5) {
                resolve(null, '> 0.5');
            } else {
                resolve(null, '<= 0.5');
            }
        }, 1000);
    })

}

let result = promiseMaker();
result.then(function (data) {
    console.log(data);
});