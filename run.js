#!/usr/bin/node

var async = require('async');
var _ = require('underscore');

var acquire_monkey = function(id, callback) {
    var monkies = [
        {id:0, name:'hermann', friend:1},
        {id:1, name:'harriet', friend:4},
        {id:2, name:'joy', friend:5},
        {id:3, name:'frederick', friend:6},
        {id:4, name:'molly', friend:7},
        {id:5, name:'hilma', friend:1},
        {id:6, name:'william', friend:0},
        {id:7, name:'geoffery', friend:8},
        {id:8, name:'ted', friend:9},
        {id:9, name:'tina', friend:2}
    ];
    _.defer(function() {
        callback(_.find(monkies, function(m) { return m.id === id }))
    })
}


process.stdin.resume();
process.stdin.setEncoding('utf8')

process.stdin.on('data', function(chunk) {
    process.stdout.write(chunk+"\n");
    process.stdout.write('/*\n\n');
    eval(chunk);
    //process.stdout.write('\n\n*/');
})

process.on('exit', function() {
    process.stdout.write('\n\n*/');
})
