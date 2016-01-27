$traceurRuntime.registerModule("app/es5/app/es6/mySpec.js", [], function() {
  "use strict";
  var __moduleName = "app/es5/app/es6/mySpec.js";
  describe("arrays", function() {
    it("doubles array", function() {
      var array = [1, 2, 3, 4];
      var sum = 0;
      var doubled = array.map(function(n) {
        return n * 2;
      });
      var doubledes6 = array.map(function(n) {
        return n * 2;
      });
      expect(doubled).toEqual([2, 4, 6, 8]);
      expect(doubledes6).toEqual([2, 4, 6, 8]);
    });
  });
  describe("lexically bind this reference", function() {
    it("does not pass this", function(done) {
      this.name = "Laurel";
      setTimeout(function() {
        expect(this.name).not.toBe("Laurel");
        done();
      }, 15);
    });
    it("we can use self", function(done) {
      var self = this;
      self.name = "Laurel";
      setTimeout(function() {
        expect(self.name).toBe("Laurel");
        done();
      }, 15);
    });
    it("we can use bind", function(done) {
      this.name = "Laurel";
      setTimeout(function() {
        expect(this.name).toBe("Laurel");
        done();
      }.bind(this), 15);
    });
    it("using arrow functions", function(done) {
      var $__1 = this;
      this.name = "Laurel";
      setTimeout(function() {
        expect($__1.name).toBe("Laurel");
        done();
      }, 15);
    });
  });
  describe("for of", function() {
    it("loops", function() {
      var numbers = [1, 2, 3, 4];
      var sum = 0;
      var $__5 = true;
      var $__6 = false;
      var $__7 = undefined;
      try {
        for (var $__3 = void 0,
            $__2 = (numbers)[Symbol.iterator](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
          var n = $__3.value;
          {
            sum += n;
          }
        }
      } catch ($__8) {
        $__6 = true;
        $__7 = $__8;
      } finally {
        try {
          if (!$__5 && $__2.return != null) {
            $__2.return();
          }
        } finally {
          if ($__6) {
            throw $__7;
          }
        }
      }
      expect(sum).toBe(10);
    });
  });
  return {};
});
