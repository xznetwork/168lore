/** www.168lore.com */
 ;!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/el",[],function(){return{errorLoading:function(){return"Τα αποτελέσματα δεν μπόρεσαν να φορτώσουν."},inputTooLong:function(n){var e=n.input.length-n.maximum,r="Παρακαλώ διαγράψτε "+e+" χαρακτήρ";return 1==e&&(r+="α"),1!=e&&(r+="ες"),r},inputTooShort:function(n){var e=n.minimum-n.input.length,r="Παρακαλώ συμπληρώστε "+e+" ή περισσότερους χαρακτήρες";return r},loadingMore:function(){return"Φόρτωση περισσότερων αποτελεσμάτων…"},maximumSelected:function(n){var e="Μπορείτε να επιλέξετε μόνο "+n.maximum+" επιλογ";return 1==n.maximum&&(e+="ή"),1!=n.maximum&&(e+="ές"),e},noResults:function(){return"Δεν βρέθηκαν αποτελέσματα"},searching:function(){return"Αναζήτηση…"}}}),{define:n.define,require:n.require}}();