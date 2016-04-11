/**
 * Created by nlundqu on 2016-04-10.
 */

import can from 'can';

var map = new (can.Map.extend({
    define: {
        test: {
           value: JSON.stringify({hello: 'world'})
        },

        '*': {
            //set: function(value) {
            //    return JSON.stringify(value);
            //},
            get: function (value) {
                return JSON.parse(this.value);
            }
        }
    }
}));

//map.attr('foo', {test: 'setter'});

document.body.innerHTML = '<h1>' + (map.attr('test').hello || 'failed') + '</h1>';