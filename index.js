'use strict';

exports.init = function (engine) {
    var cachedEnties,
        original = engine.getAllEntries;

    engine.getAllEntries = function () {
        if (!cachedEnties) {
            cachedEnties = original();
        }

        return cachedEnties;
    };
};