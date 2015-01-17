Tinytest.add('blocking', function (test) {
  var isDefined = false;
  try {
    blocking;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "blocking is not defined");
  test.isTrue(Package['peerlibrary:blocking'].blocking, "Package.peerlibrary:blocking.blocking is not defined");

  test.equal(blocking(function (a, b, cb) { cb(null, a + b) })(1, 2), 3);

  test.equal(blocking(function (a, b, f, cb) { cb(null, f(a, b)) })(1, 2, function (a, b) {return a + b}), 3);

  test.throws(function () {
    blocking(function (a, b, cb) { cb("test error") })(1, 2)
  }, /^test error$/);
});
