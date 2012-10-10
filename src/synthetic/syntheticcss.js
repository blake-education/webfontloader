/**
 *
 * WebFont.load({
 *   synthetic: {
 *     families: ['Font1', 'Font2'],
 *    css: "css string"
 * });
 *
 * @constructor
 */
webfont.SyntheticCss = function(domHelper, configuration) {
  this.domHelper_ = domHelper;
  this.configuration_ = configuration;
};

webfont.SyntheticCss.NAME = 'synthetic';

webfont.SyntheticCss.prototype.load = function(onReady) {
  var css = this.configuration_['css'] || "";
  var families = this.configuration_['families'] || [];

  if(css.length > 0) {
    this.domHelper_.insertInto('head', this.domHelper_.createCssTag(css));
  }

  onReady(families);
};

webfont.SyntheticCss.prototype.supportUserAgent = function(userAgent, support) {
  return support(userAgent.isSupportingWebFont());
};

globalNamespaceObject.addModule(webfont.SyntheticCss.NAME, function(configuration) {
  var domHelper = new webfont.DomHelper(document);
  return new webfont.SyntheticCss(domHelper, configuration);
});

