var OrangeTree = function() {
  this.age = 0;
  this.height = 0;
  this.oranges = [];
}

OrangeTree.prototype.ageOfMaturity = 6;
OrangeTree.prototype.ageOfDeath = 100;
OrangeTree.prototype.annualGrowthRate = 2.5;
OrangeTree.prototype.maximumHeight = 25;
OrangeTree.prototype.annualOrangeProduction = 10;

OrangeTree.prototype.isMature = function() {
  return this.age >= this.ageOfMaturity;
};

OrangeTree.prototype.isDead = function() {
  return this.age >= this.ageOfDeath;
};

OrangeTree.prototype.hasOranges = function() {
  return this.oranges.length;
};

OrangeTree.prototype.passGrowingSeason = function() {
  if(!this.isDead()) {
    this.oranges = [];
    this.age++;

    if(this.height < this.maximumHeight) {
      this.height += this.annualGrowthRate;
    };

    if(this.isMature()) {
      for(var x = 0; x < this.annualOrangeProduction; x++) {
        this.oranges.push(new Orange());
      };
    };
  };
};

OrangeTree.prototype.pickAnOrange = function() {
  return this.oranges.pop();
}
