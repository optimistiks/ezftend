angular.module('common').directive('sticker', function ($rootScope, event) {
  return {
    replace: true,
    scope: {},
    templateUrl: 'common/directive/sticker/sticker.html',
    link: function (scope, element, attrs, fn) {
      var PIECE_HEIGHT = '11';

      $rootScope.$on(event.TEXT_SELECT, function ($event, text, mouseEvent) {
        var pageX = mouseEvent.pageX;
        var pageY = mouseEvent.pageY;
        var top = pageY - element.height() - PIECE_HEIGHT;
        var left = pageX - Math.floor(element.width() / 2);
        element.css('top', top);
        element.css('left', left);
      });
    }
  };
});
