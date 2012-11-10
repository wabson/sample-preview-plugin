/**
 * Copyright (C) 2010-2012 Will Abson
 */

/**
 * This is the "PDF" plug-in used to display documents directly in the web browser.
 *
 * Supports the "application/pdf" mime types.
 *
 * @namespace Alfresco.WebPreview.prototype.Plugins
 * @class Alfresco.WebPreview.prototype.Plugins.PDF
 */
(function()
{
    /**
     * PDF plug-in constructor
     *
     * @param wp {Alfresco.WebPreview} The Alfresco.WebPreview instance that decides which plugin to use
     * @param attributes {Object} Arbitrary attributes brought in from the <plugin> element
     */
    Alfresco.WebPreview.prototype.Plugins.PDF = function(wp, attributes)
    {
       this.wp = wp;
       this.attributes = YAHOO.lang.merge(Alfresco.util.deepCopy(this.attributes), attributes);
       return this;
    };
    
    Alfresco.WebPreview.prototype.Plugins.PDF.prototype =
    {
       /**
        * Attributes
        */
       attributes:
       {
          /**
           * Maximum size to display given in bytes if the node's content is used.
           * If the node content is larger than this value the image won't be displayed.
           * Note! This doesn't apply if src is set to a thumbnail.
           *
           * @property srcMaxSize
           * @type String
           * @default "2000000"
           */
          srcMaxSize: "2000000"
       },
    
       /**
        * Tests if the plugin can be used in the users browser.
        *
        * @method report
        * @return {String} Returns nothing if the plugin may be used, otherwise returns a message containing the reason
        *         it cant be used as a string.
        * @public
        */
       report: function PDF_report()
       {
          // TODO: Detect whether Adobe PDF plugin is installed, or if navigator is Chrome
          // See http://stackoverflow.com/questions/185952/how-do-i-detect-the-adobe-acrobat-version-installed-in-firefox-via-javascript
          var srcMaxSize = this.attributes.srcMaxSize;
          if (!this.attributes.src && srcMaxSize.match(/^\d+$/) && this.wp.options.size > parseInt(srcMaxSize))
          {
             return this.wp.msg("PDF.tooLargeFile", this.wp.options.name, Alfresco.util.formatFileSize(this.wp.options.size), Alfresco.util.formatFileSize(this.attributes.srcMaxSize));
          }
       },
    
       /**
        * Display the node.
        *
        * @method display
        * @public
        */
       display: function PDF_display()
       {
          // TODO: Support rendering the content of the thumbnail specified 
          var src = this.wp.getContentUrl();
          return '<iframe src="' + src + '"></iframe>';
       }
    };

})();
