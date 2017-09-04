let Utils = {
    htmlEscape: function(s) {
        return s
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      },
      write: function($obj, obj2ID){
        $import = $($('link[rel=import]').prop('import'));
        $obj2 = $import.find(obj2ID);
        $obj.html(this.htmlEscape($obj2.html()));
        $obj.addClass('prettyprint');
        PR.prettyPrint();
      }
}