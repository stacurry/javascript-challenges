describe("an orange tree", function() {
  var tree;

  beforeEach(function() {
    tree = new OrangeTree();
  });

  it("has an age", function() {
    expect(tree.age).toEqual(0);
  });
  it("has a height", function() {
    expect(tree.height).toEqual(0);
  });
  it("has a collection of oranges", function() {
    expect(tree.oranges).toEqual([]);
  });

  describe("reporting whether it's mature", function() {
    it("is mature if it has reached fruit-bearing age", function() {
      tree.age = 6;
      expect(tree.isMature()).toEqual(true);
    });
    it("is not mature if it has not reached fruit-bearing age", function(){
      tree.age = 5;
      expect(tree.isMature()).toEqual(false);
    });
  });

  describe("reporting whether it's dead", function() {
    it("is dead if it's reached the maximum age for an orange tree", function() {
      tree.age = 100;
      expect(tree.isDead()).toEqual(true);
    });
    it("is not dead if it's not reached the maximum age for an orange tree", function() {
      tree.age = 99;
      expect(tree.isDead()).toEqual(false);
    });
  });

  describe("reporting whether it has oranges", function() {
    it("has oranges if it's collection of oranges is not empty", function() {
      expect(tree.hasOranges()).toBeFalsy();
    });
    it("has no oranges if it's collection of oranges is empty", function() {
      tree.age = 6;
      tree.passGrowingSeason();
      expect(tree.hasOranges()).toBeTruthy();
    });
  });

  describe("passing a growing season", function() {
    describe("when it's alive", function() {
      it("gets older", function() {
        tree.passGrowingSeason();
        expect(tree.age).toEqual(1);
      });

      describe("when the tree is shorter than the maximum height for an orange tree", function() {
        it("grows taller", function() {
          tree.passGrowingSeason();
          expect(tree.height).toEqual(2.5);
        });
      });

      describe("when the tree has reached the maximum height for an orange tree", function() {
        it("does not grow", function() {
          tree.height = 25;
          tree.passGrowingSeason();
          expect(tree.height).toEqual(25);
        });
      });

      describe("when it's mature", function() {
        it("produces oranges", function() {
          tree.age = 6;
          tree.passGrowingSeason();
          expect(tree.hasOranges()).toBeTruthy();
        });
      });

      describe("when it's not mature", function() {
        it("does not produce fruit", function() {
          tree.passGrowingSeason();
          expect(tree.hasOranges()).toBeFalsy();
        });
      });
    });

    describe("when it's dead", function() {
      it("does not get older", function() {
        tree.age = 100;
        tree.passGrowingSeason();
        expect(tree.age).toEqual(100);
      });
      it("does not grow", function() {
        tree.age = 100;
        tree.passGrowingSeason();
        expect(tree.height).toEqual(0);
      });
      it("does not produce fruit", function() {
        tree.age = 100;
        tree.passGrowingSeason();
        expect(tree.hasOranges()).toBeFalsy();
      });
    });
  });

  describe("picking an orange", function() {
    describe("when the tree has oranges", function() {
      it("returns one of its oranges", function() {
        tree.age = 6;
        tree.passGrowingSeason();
        obj = tree.pickAnOrange();
        expect(obj).toEqual(jasmine.any(Orange));
      });
      it("no longer has the returned orange in its collection of oranges",function() {
        tree.age = 6;
        tree.passGrowingSeason();
        obj = tree.pickAnOrange();
        expect(tree.oranges.indexOf(obj)).toEqual(-1);
      });
    });

    describe("when the tree has no oranges", function() {
      it("returns undefined", function() {
        expect(tree.pickAnOrange()).toBeUndefined();
      });
    });
  });
});
