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
  };
  _.set = function(a, b) {
    this.contents[a] = b;
  };
  _.call = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    return this.contents[a](b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z);
  };
  _.2Dget = function(a, b) {
    return this.contents[a][b];
  };
  _.2Dset = function(a, b, c) {
    this.contents[a][b] = c;
  };
  _.2Dcall = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _a) {
    return this.contents[a][b](c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _a);
  };
  _.3Dget = function(a, b, c) {
    return this.contents[a][b][c];
  };
  _.3Dset = function(a, b, c, d) {
    this.contents[a][b][c] = d;
  };
  _.3Dcall = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _a, _b) {
    return this.contents[a][b][c](d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _a, _b);
  };
  return _;
};
JavaKilg.2D = function(x, y) {
  var _ = []
  for(var i = 0; i < x; i++) {
    _[i] = [];
    for(var j = 0; j < y; j++) {
      _[i][j] = undefined;
    }
  }
  return _;
}
JavaKilg.3D = function(x, y, z) {
  var _ = []
  for(var i = 0; i < x; i++) {
    _[i] = [];
    for(var j = 0; j < y; j++) {
      _[i][j] = [];
      for(var k = 0; k < z; k++) {
        _[i][j][k] = undefined;
      }
    }
  }
  return _;
}
