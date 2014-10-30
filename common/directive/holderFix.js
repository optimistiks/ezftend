/*global Holder*/
angular.module('common').directive('holderFix', function () {
  return {
    link: function (scope, element, attrs) {
      Holder.run({
        images: element[0],
        nocss: true
      });
    }
  };
});
