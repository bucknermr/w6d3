const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(() => {
  $(".follow-toggle").each((index, button) => {
    new FollowToggle(button);
  });

  $("nav.user-search").each((index, search) => {
    new UsersSearch(search);
  });

});
