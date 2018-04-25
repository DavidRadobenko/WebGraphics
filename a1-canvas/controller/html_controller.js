/*
 * JavaScript / Canvas teaching framwork 
 * (C)opyright Hartmut Schirmacher, hschirmacher.beuth-hochschule.de
 * changes by Kristian Hildebrand, khildebrand@beuth-hochschule.de
 * additional changes by Martin Puse, mpuse@beuth-hochschule.de
 *
 * Module: html_controller
 *
 * Defines callback functions for communicating with various 
 * HTML elements on the page, e.g. buttons and parameter fields.
 */

/* requireJS module definition */
define(['jquery', 'util', 'Line'],
function($, util, Line) {
    
    'use strict';

    /*
     * define callback functions to react to changes in the HTML page
     * and provide them with a closure defining context
     */
    function HtmlController(context, sceneController) {

        // generate random coordinates within the canvas
        var _randomX = function() { return util.randomInt(context.canvas.width,  5); };
        var _randomY = function() { return util.randomInt(context.canvas.height, 5); };

        /*
         * event handler for 'new line' button.
         */
        $('#btnNewLine').click(function() {
            // create the actual line and add it to the scene
            var style = {
                width : util.randomInt(7, 1),
                color : util.randomHexColor()
            };
            var line = new Line(
                [ _randomX(), _randomY() ],
                [ _randomX(), _randomY() ],
                style
            );
            // add and select newly created object
            sceneController.add(line);
            sceneController.deselect();
            sceneController.select(line); // this will also redraw
        });
    };

    // return the constructor function
    return HtmlController;
});
