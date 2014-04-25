export default function() {
  return function(key, value) {
    if (arguments.length == 1) {
      return this.$data[key];
    } else {
      this.$changes[key] = value;
      return value;
    }
  }.property('$data', '$changes');
};
