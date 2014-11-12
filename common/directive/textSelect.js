angular.module('common').directive('textSelect', function ($window, $log, $rootScope, event) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs, fn) {

      /**
       * get currently selected text on page
       * See {@link http://www.quirksmode.org/dom/range_intro.html#link2}
       * @returns {String}
       */
      var getSelectedText = function () {
        var userSelection;

        if ($window.getSelection) {
          userSelection = $window.getSelection();
        } else if ($window.document.selection) { // should come last; Opera!
          userSelection = $window.document.selection.createRange();
        }

        if (userSelection.text) {
          userSelection = userSelection.text;
        }

        return userSelection.toString();
      };

      var mouseupHandler = function ($event) {
        var selectedText = getSelectedText().replace(/^\s+|\s+$/g, '');
        $log.debug('common.directive.textSelect', 'mouseup handler', selectedText);
        $rootScope.$broadcast(event.TEXT_SELECT, selectedText, $event);
      };

      element.on('mouseup', mouseupHandler);
    }
  };
});
