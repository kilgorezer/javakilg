// JavaKilg Alpha Version 1
const JavaKilg = Object.create(null);
JavaKilg.toString = function() {
  return "[JavaKilg VA1]";
};
JavaKilg.constructor = globalThis;
JavaKilg.new = function(obj) {
  var _ = Object.create(null);
  _.contents = obj;
  _.toString = JavaKilg.toString;
  _.get = function(a) {
    return this.contents[a];
  };
  _.set = function(a, b) {
    this.contents[a] = b;
    return this;
  };
  _.call = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    return this.contents[a](b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z);
  };
  _.get2D = function(a, b) {
    return this.contents[a][b];
  };
  _.set2D = function(a, b, c) {
    this.contents[a][b] = c;
    return this;
  };
  _.call2D = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _a) {
    return this.contents[a][b](c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _a);
  };
  _.get3D = function(a, b, c) {
    return this.contents[a][b][c];
  };
  _.set3D = function(a, b, c, d) {
    this.contents[a][b][c] = d;
    return this;
  };
  _.call3D = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _a, _b) {
    return this.contents[a][b][c](d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, _a, _b);
  };
  _.constructor = JavaKilg.new;
  return _;
};
JavaKilg.Arr2D = function(x, y) {
  var _ = []
  for(var i = 0; i < x; i++) {
    _[i] = [];
    for(var j = 0; j < y; j++) {
      _[i][j] = undefined;
    }
  }
  return _;
}
JavaKilg.Arr3D = function(x, y, z) {
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
JavaKilg.local = Object.create(null);
JavaKilg.local.toString = JavaKilg.toString;
JavaKilg.local.get = function(a) {
  return localStorage.getItem(a);
};
JavaKilg.local.set = function(a, b) {
  localStorage.setItem(a, b);
  return this;
};
JavaKilg.local.del = function(a) {
  localStorage.removeItem(a);
  return this;
}
JavaKilg.local.constructor = JavaKilg.new;
JavaKilg.session = Object.create(null);
JavaKilg.session.toString = JavaKilg.toString;
JavaKilg.session.get = function(a) {
  return sessionStorage.getItem(a);
};
JavaKilg.session.set = function(a, b) {
  sessionStorage.setItem(a, b);
  return this;
};
JavaKilg.session.del = function(a) {
  sessionStorage.removeItem(a);
  return this;
}
JavaKilg.session.constructor = JavaKilg.new;
