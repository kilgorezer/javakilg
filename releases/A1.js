// JavaKilg Alpha Version 1
const JavaKilg = Object.create(null);
JavaKilg.toString = function() {
  return "[JavaKilg VA1]";
};
JavaKilg.new = function(obj) {
  var _ = Object.create(null);
  _.contents = obj;
  _.toString = JavaKilg.toString;
  _.get = function(a) {
    return this.contents[a];
  }
};
