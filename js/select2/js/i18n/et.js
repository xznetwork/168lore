/** www.168lore.com */
 ;!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/et",[],function(){return{inputTooLong:function(e){var n=e.input.length-e.maximum,u="Sisesta "+n+" täht";return 1!=n&&(u+="e"),u+=" vähem"},inputTooShort:function(e){var n=e.minimum-e.input.length,u="Sisesta "+n+" täht";return 1!=n&&(u+="e"),u+=" rohkem"},loadingMore:function(){return"Laen tulemusi…"},maximumSelected:function(e){var n="Saad vaid "+e.maximum+" tulemus";return n+=1==e.maximum?"e":"t",n+=" valida"},noResults:function(){return"Tulemused puuduvad"},searching:function(){return"Otsin…"}}}),{define:e.define,require:e.require}}();