const FollowToggle = require('./follow_toggle');

$(() => {
  $(".follow-toggle").each((index, button) => {
    let followToggle = new FollowToggle(button);

  });
});
