var Dict = require("../dict");
    _ = require('underscore');

describe("testing a simple dictionary structure", function() {

  it("should initialize with an empty datastore", function() {
    var dict = new Dict();
    expect(dict.len()).toBe(0);
  });

  it("should add the key with the designated value", function() {
    var dict = new Dict();
    dict.put("one", 1);
    expect(dict.get("one")).toBe(1);
    expect(dict.len()).toBe(1);
  });

  it("should update an existing key with the new value", function() {
    var dict = new Dict();
    dict.put("one", 1);
    expect(dict.get("one")).toBe(1);
    expect(dict.len()).toBe(1);
    dict.put("one", 3);
    expect(dict.get("one")).toBe(3);
    expect(dict.len()).toBe(1);
  });

  it("should return undefined when queried for a non-existent key", function() {
    var dict = new Dict();
    dict.put("one", 1);
    expect(dict.get("two")).not.toBeDefined();
  });

  it("should return undefined when queried for a previously deleted key", function() {
    var dict = new Dict();
    dict.put("one", 1);
    dict.put("two", 2);
    dict.put("three", 3);

    dict.del("two");
    expect(dict.get("two")).not.toBeDefined();
  });

});
