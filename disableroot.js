Java.perform(function() {

       var theClass = Java.use("sg.vantagepoint.a.c");

       theClass.a.implementation = function(v) {
            console.log("In function A");
             return false;
         }
       theClass.b.implementation = function(v) {
           console.log("In function B");
            return false;
        }
      theClass.c.implementation = function(v) {
           console.log("In function C");
            return false;
        }

       console.log("Exploit Complete")

})
