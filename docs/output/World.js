Ext.data.JsonP.World({"tagname":"class","name":"World","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-World","members":{"cfg":[],"property":[{"name":"height","tagname":"property","owner":"World","meta":{},"id":"property-height"},{"name":"scale","tagname":"property","owner":"World","meta":{},"id":"property-scale"},{"name":"width","tagname":"property","owner":"World","meta":{},"id":"property-width"},{"name":"xOffset","tagname":"property","owner":"World","meta":{},"id":"property-xOffset"},{"name":"yOffset","tagname":"property","owner":"World","meta":{},"id":"property-yOffset"}],"method":[{"name":"canvasToWorldPosition","tagname":"method","owner":"World","meta":{},"id":"method-canvasToWorldPosition"},{"name":"centerViewportAround","tagname":"method","owner":"World","meta":{},"id":"method-centerViewportAround"},{"name":"isInView","tagname":"method","owner":"World","meta":{},"id":"method-isInView"},{"name":"isInWorld","tagname":"method","owner":"World","meta":{},"id":"method-isInWorld"},{"name":"resize","tagname":"method","owner":"World","meta":{},"id":"method-resize"},{"name":"scaleResolution","tagname":"method","owner":"World","meta":{},"id":"method-scaleResolution"},{"name":"worldToCanvasPosition","tagname":"method","owner":"World","meta":{},"id":"method-worldToCanvasPosition"}],"event":[{"name":"resizeWorld","tagname":"event","owner":"World","meta":{},"id":"event-resizeWorld"}],"css_var":[],"css_mixin":[]},"linenr":914,"files":[{"filename":"core.js","href":"core.html#World"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/core.html#World' target='_blank'>core.js</a></div></pre><div class='doc-contents'><p>The World object.</p>\n\n<p>The World represents the complete playable game area. Its size can be set\nexplicitly or is automatically determined by the \"data-worldwidth\" and\n\"data-worldheight\" attributes set on the HTML canvas element (with a\nfallback to the canvas width and height). If the size of the world is larger\nthan the canvas then by default the view of the world will scroll when the\n<a href=\"#!/api/global-property-player\" rel=\"global-property-player\" class=\"docClass\">player</a> approaches a side of the canvas.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-height' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-height' class='name not-expandable'>height</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The height of the world.</p>\n</div><div class='long'><p>The height of the world.</p>\n</div></div></div><div id='property-scale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-property-scale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-scale' class='name expandable'>scale</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The percent amount (as a fraction) the canvas resolution is linearly\n  scaled relative to its original size. ...</div><div class='long'><p>The percent amount (as a fraction) the canvas resolution is linearly\n  scaled relative to its original size. For example, if the canvas started\n  at 1024x768 and it is now rendering at 512x384, then the scale will be\n  0.5. Notice that the number of virtual pixels rendered on the canvas\n  changes with the square of the scale.</p>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-width' class='name not-expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The width of the world.</p>\n</div><div class='long'><p>The width of the world.</p>\n</div></div></div><div id='property-xOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-property-xOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-xOffset' class='name not-expandable'>xOffset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The pixel-offset of what's being displayed in the canvas compared to the\n  world origin.</p>\n</div><div class='long'><p>The pixel-offset of what's being displayed in the canvas compared to the\n  world origin.</p>\n</div></div></div><div id='property-yOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-property-yOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-property-yOffset' class='name not-expandable'>yOffset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The pixel-offset of what's being displayed in the canvas compared to the\n  world origin.</p>\n</div><div class='long'><p>The pixel-offset of what's being displayed in the canvas compared to the\n  world origin.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-canvasToWorldPosition' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-method-canvasToWorldPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-canvasToWorldPosition' class='name expandable'>canvasToWorldPosition</a>( <span class='pre'>x, y</span> ) : Object</div><div class='description'><div class='short'>Convert a position over the canvas to a position in the world. ...</div><div class='long'><p>Convert a position over the canvas to a position in the world.</p>\n\n<p>The canvas position being converted should be in displayed pixels from the\nupper-left corner of the canvas.</p>\n\n<p>This could be useful when placing objects at a given location in the\ncanvas if you need the object to align with something outside of the\ncanvas. (Note that <a href=\"#!/api/Mouse.Coords\" rel=\"Mouse.Coords\" class=\"docClass\">Mouse.Coords</a> already has worldX() and worldY()\nmethods for representing the mouse position in the world.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The x-position over the canvas to convert.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The y-position over the canvas to convert.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with <code>x</code> and <code>y</code> properties representing x- and y-coordinates\n  in the world.</p>\n</div></li></ul></div></div></div><div id='method-centerViewportAround' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-method-centerViewportAround' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-centerViewportAround' class='name expandable'>centerViewportAround</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>Center the viewport around a specific location in the world. ...</div><div class='long'><p>Center the viewport around a specific location in the world.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The x-coordinate around which to center the viewport.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The y-coordinate around which to center the viewport.</p>\n</div></li></ul></div></div></div><div id='method-isInView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-method-isInView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-isInView' class='name expandable'>isInView</a>( <span class='pre'>box, [partial]</span> ) : Boolean</div><div class='description'><div class='short'>Determine whether a Box is inside the viewport. ...</div><div class='long'><p>Determine whether a Box is inside the viewport.</p>\n\n<p>To test whether a Box is inside the World, see <a href=\"#!/api/World-method-isInWorld\" rel=\"World-method-isInWorld\" class=\"docClass\">World.isInWorld</a>().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>box</span> : <a href=\"#!/api/Box\" rel=\"Box\" class=\"docClass\">Box</a><div class='sub-desc'><p>The Box object to check for visibility.</p>\n</div></li><li><span class='pre'>partial</span> : Boolean (optional)<div class='sub-desc'><p>Indicates whether to consider the Box inside the viewport if it is only\n  partially inside (true) or fully inside (false).</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the Box is inside the viewport; false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-isInWorld' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-method-isInWorld' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-isInWorld' class='name expandable'>isInWorld</a>( <span class='pre'>box, [partial]</span> ) : Boolean</div><div class='description'><div class='short'>Determine whether a Box is inside the world. ...</div><div class='long'><p>Determine whether a Box is inside the world.</p>\n\n<p>To test whether a Box is inside the viewport, see <a href=\"#!/api/World-method-isInView\" rel=\"World-method-isInView\" class=\"docClass\">World.isInView</a>().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>box</span> : <a href=\"#!/api/Box\" rel=\"Box\" class=\"docClass\">Box</a><div class='sub-desc'><p>The Box object to check.</p>\n</div></li><li><span class='pre'>partial</span> : Boolean (optional)<div class='sub-desc'><p>Indicates whether to consider the box inside the world if it is only\n  partially inside (true) or fully inside (false).</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the Box is inside the world; false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-resize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-method-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-resize' class='name expandable'>resize</a>( <span class='pre'>newWidth, newHeight</span> )</div><div class='description'><div class='short'>Resize the world to new dimensions. ...</div><div class='long'><p>Resize the world to new dimensions.</p>\n\n<p>Careful! This will shift the viewport regardless of where the player is.\nObjects already in the world will retain their coordinates and so may\nappear in unexpected locations on the screen.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newWidth</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The new width to which to resize the world.</p>\n</div></li><li><span class='pre'>newHeight</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The new height to which to resize the world.</p>\n</div></li></ul></div></div></div><div id='method-scaleResolution' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-method-scaleResolution' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-scaleResolution' class='name expandable'>scaleResolution</a>( <span class='pre'>factor, [x], [y]</span> )</div><div class='description'><div class='short'>Scale the canvas resolution. ...</div><div class='long'><p>Scale the canvas resolution.</p>\n\n<p>Passing a factor smaller than 1 allows reducing the resolution of the\ncanvas, which should improve performance (since there is less to render in\neach frame). It does not actually change the size of the canvas on the\npage; it just scales how big each \"pixel\" is drawn on the canvas, much\nlike changing the resolution of your monitor does not change its physical\nsize. It is your responsibility to change the size of any fixed-size\nentities in the world after resizing, if applicable; if you don't do this,\ncalling this function works much like zooming in or out.</p>\n\n<p>You may want to call this in a listener for the\n<a href=\"#!/api/global-event-low_fps\" rel=\"global-event-low_fps\" class=\"docClass\">Low FPS event</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>factor</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The percent amount to scale the resolution on each dimension as a\n  fraction of the <em>original</em> resolution (typically between zero and\n  one). In other words, if the original resolution is 1024x768, scaling\n  the resolution by a factor of 0.5 will result in a resolution of 512x384\n  (showing 25% as many pixels on the screen). If scaled again by a factor\n  of 2, the result will be 2048x1536. Use the <code>scale</code> property to detect\n  the factor by which the resolution is currently scaled.</p>\n</div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The x-coordinate of a location to center the viewport around after\n  resizing the canvas. A common use is <code>player.x</code>. Defaults to centering\n  around the current view.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The y-coordinate of a location to center the viewport around after\n  resizing the canvas. A common use is <code>player.y</code>. Defaults to centering\n  around the current view.</p>\n</div></li></ul></div></div></div><div id='method-worldToCanvasPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-method-worldToCanvasPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-method-worldToCanvasPosition' class='name expandable'>worldToCanvasPosition</a>( <span class='pre'>x, y</span> ) : Object</div><div class='description'><div class='short'>Convert a position in the world to a position over the canvas. ...</div><div class='long'><p>Convert a position in the world to a position over the canvas.</p>\n\n<p>The returned canvas position will be in displayed pixels from the\nupper-left corner of the canvas. This is useful when positioning DOM\nelements over the canvas, for example with\n<a href=\"#!/api/App.Utils-static-method-positionOverCanvas\" rel=\"App.Utils-static-method-positionOverCanvas\" class=\"docClass\">App.Utils.positionOverCanvas</a>.</p>\n\n<p>If you instead want the position relative to the rendered canvas, which\nmay be useful for example if you want to transition something from\nscrolling to fixed position, you should instead use <code>x - world.xOffset</code>\nand <code>y - world.yOffset</code>. The difference between displayed and rendered\nposition is only relevant when the canvas has been scaled with\n<a href=\"#!/api/World-method-scaleResolution\" rel=\"World-method-scaleResolution\" class=\"docClass\">scaleResolution</a>, causing the canvas to be rendered at one\nsize and then scaled to another for display using CSS.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The x-position over the canvas to convert.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The y-position over the canvas to convert.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with <code>x</code> and <code>y</code> properties representing x- and y-coordinates\n  over the canvas.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-resizeWorld' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='World'>World</span><br/><a href='source/core.html#World-event-resizeWorld' target='_blank' class='view-source'>view source</a></div><a href='#!/api/World-event-resizeWorld' class='name expandable'>resizeWorld</a>( <span class='pre'>x, y, resizedWorld</span> )</div><div class='description'><div class='short'>Broadcast that the world size changed so that objects already in the\n  world or other things that depend on the world...</div><div class='long'><p>Broadcast that the world size changed so that objects already in the\n  world or other things that depend on the world size can update their\n  position or size accordingly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>How far in pixels the viewport shifted horizontally.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>How far in pixels the viewport shifted vertically.</p>\n</div></li><li><span class='pre'>resizedWorld</span> : <a href=\"#!/api/World\" rel=\"World\" class=\"docClass\">World</a><div class='sub-desc'><p>The world that changed size.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});