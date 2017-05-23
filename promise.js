 /*
Make a Promise, using One button in promise.html 
then log status there in another element.
You need to show all states of promise, for example on first time click on
that button:
1) Started (Sync code started)
1) Promise started (Async code started)
1) Promise made (Sync code terminated)
1) Promise fulfilled (Async code terminated) and so on
So create one js file write your promise code into promise.js and show output in html.
*/

'use strict';
// This global variable counter will display the number of button clicks made before
//displaying status
var promiseCount = 0;

function makePromise() {
    // Increment the global counter, then set the limited scope variable = to it
    let thisPromiseCount = ++promiseCount;

    // Output the Promise Sync Code Started message
    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // We make a new promise.)
    let p1 = new Promise(
        // The resolver function is called with the ability to resolve or
        // reject the promise
       (resolve, reject) => {
            // Output the Promise Async Code Started message
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // The setTimeout() function is used to create asynchronism
            window.setTimeout(
                function() {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

 
    // The then() call is executed when the promise is resolved.
    p1.then(
        // Output the Promise Async Code Terminated message with the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        })
        //   // and the catch() method defines what to do if the promise is rejected.
    .catch(
        // Output the Promise Rejected message with the reason.
       (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });
    // Output the Promise Made, Sync Code Terminated message
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}