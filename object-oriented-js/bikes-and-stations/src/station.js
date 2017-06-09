var Station = function(name, location, bikes) {
  this.name = name;
  this.location = location;
  this.bikes = bikes;
};

Station.prototype.empty = function() {
  return this.bikes.length === 0;
};

Station.prototype.newestBike = function() {
  var sortedBikes = this.bikes.sort(function(a, b) {
    return a.modelYear - b.modelYear;
  });
  return sortedBikes.pop();
};

Station.prototype.take = function(bike) {
  this.bikes.push(bike);
};

Station.prototype.takeMultiple = function(bikes) {
  this.bikes = this.bikes.concat(bikes);
};

Station.prototype.release = function() {
  var newestBike = this.newestBike();
  var index = this.bikes.indexOf(newestBike);
  this.bikes.splice(index);
  return newestBike;
};
