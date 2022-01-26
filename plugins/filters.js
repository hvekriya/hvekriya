import Vue from 'vue'
import moment from 'moment'


Vue.filter("readMore", function(text, length, suffix) {
  let newText = text
    .map(a => a.text)
    .filter(b => b)
    .join(" ");
  return newText.substring(0, length) + suffix;
});

Vue.filter("truncate", function(value) {
  if (value.length > 20) {
    value = value.substring(0, 17) + "...";
  }
  return value;
});

Vue.filter("formatDate", function(date) {
  return moment(date).format("MMMM Do YYYY");
});