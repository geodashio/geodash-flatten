/**
 * Flattens an object.
 *
 * @function flatten
 * @param {Object} obj - The original object
 * @param {string|undefined} prefix - A prefix, if any, to add to the new object's keys.
 * @return {Object} the flattened version of the object
 *
 * @example
 * var flatten = require("geodash-flatten")
 * var a = {'x': {'y': 'z' }, 'a': ['b', 'c', 'd']}
 * var b = flatten(a);
 * b == {'x__y': 'z', 'a__0': 'b', 'a__1': 'c', 'a__2': 'd' }
 */

var flatten = function(obj, prefix)
{
  var newObject = {};
  $.each(obj, function(key, value){
    var newKey = prefix !== undefined ? prefix+"__"+key : key;
    if(
      (value === undefined) ||
      (value === null) ||
      (typeof value == "string") ||
      (typeof value == "number") ||
      (typeof value == "boolean")
    )
    {
      newObject[newKey] = value;
    }
    else if(Array.isArray(value))
    {
      $.each(flatten(value, newKey), function(key2, value2){
        newObject[""+key2] = value2;
      });
    }
    else
    {
      $.each(flatten(value, newKey), function(key2, value2){
        newObject[key2] = value2;
      });
    }
  });
  return newObject;
};

module.exports = flatten;
