const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", (event) => {
      this.handleClick(event);
    });

    this.updateFollowState = this.updateFollowState.bind(this);
    this.render = this.render.bind(this);
    this.errorMessage = this.errorMessage.bind(this);
  }

  render() {
    if (this.followState) {
      this.$el.text("Unfollow");
    } else {
      this.$el.text("Follow");
    }

    this.$el.prop("disabled", false);
  }

  handleClick(event) {
    event.preventDefault();
    this.$el.prop("disabled", true);

    let promise;

    if(this.followState){
      promise = APIUtil.unfollowUser(this.userId);
    }else{
      promise = APIUtil.followUser(this.userId);
    }

    promise
      .then(this.updateFollowState)
      .then(this.render)
      .fail(this.errorMessage);
  }

  updateFollowState(){
    this.followState = !this.followState;
  }

  errorMessage(){
    alert("There was an error on our end... try again! :)");
  }
}

module.exports = FollowToggle;
