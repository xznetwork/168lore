/** www.168lore.com */
 ;!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/bg",[],function(){return{inputTooLong:function(n){var e=n.input.length-n.maximum,u="Моля въведете с "+e+" по-малко символ";return e>1&&(u+="a"),u},inputTooShort:function(n){var e=n.minimum-n.input.length,u="Моля въведете още "+e+" символ";return e>1&&(u+="a"),u},loadingMore:function(){return"Зареждат се още…"},maximumSelected:function(n){var e="Можете да направите до "+n.maximum+" ";return e+=n.maximum>1?"избора":"избор"},noResults:function(){return"Няма намерени съвпадения"},searching:function(){return"Търсене…"}}}),{define:n.define,require:n.require}}();