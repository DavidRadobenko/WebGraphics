/*
 * JavaScript / Canvas teaching framwork 
 * (C)opyright Hartmut Schirmacher, hschirmacher.beuth-hochschule.de 
 * additional changes by Martin Puse, mpuse@beuth-hochschule.de
 * Module: vec2
 *
 * Some simple 2D vector operations based on [x,y] arrays
 */

/* requireJS module definition */
define([], function() {
       
    'use strict';
    
    // floating point comparison threshold
    var EPSILON = 0.03125;


    // lets create an vector 'interface'
    var vec2 = {};

    // add two vectors, returns new vector 
    vec2.add = function(a, b) {
        return [a[0] + b[0], a[1] + b[1]];
    };

    // subtract two vectors, returns new vector 
    vec2.sub = function(a, b) {
        return [a[0] - b[0], a[1] - b[1]];
    };

    // dot product / scalar product of two vectors, return scalar value
    vec2.dot = function(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    };
    
    // multiply vector by scalar, returns new vector
    vec2.mult = function(v, s) {
        return [s * v[0], s * v[1]];
    };
    
    // returns squared length of a vector
    vec2.square = function(v) {
        return vec2.dot(v, v);
    };
    
    // returns length of a vector
    vec2.length = function(v) {
        return Math.sqrt(vec2.dot(v, v));
    };

    // project a point onto a line defined by two points.
    // return scalar parameter of where point p is projected 
    // onto the line. the line segment between a and b
    // corresponds to the value range [0:1]
    vec2.projectPointOnLine = function(p, a, b) {
        var dv = vec2.sub(b, a);
        return vec2.square(dv) < EPSILON * EPSILON ?
            0 : vec2.dot(vec2.sub(p, a), dv) / vec2.dot(dv, dv);
    };

    // this module exports an object defining a number of functions
    return vec2;
});
