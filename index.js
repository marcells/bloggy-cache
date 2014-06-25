'use strict';

exports.init = function (engine) {
    var cachedEnties,
        original = engine.getAllEntries;

    engine.getAllEntries = function () {
        if (!cachedEnties) {
            cachedEnties = original();

            console.log('Cached!');
        }

        console.log('Return cached!')

        return cachedEnties;
    };
};