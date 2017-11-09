const APIUtil = require('./api_util');

class UsersSearch {
  constructor(el) {
    this.$el = $(el); //nav
    this.input = this.$el.find('input').val();
    this.ul = this.$el.find('ul');

    this.handleInput = this.handleInput.bind(this);
    this.input.on("keyup", this.handleInput);

    this.renderResults = this.renderResults.bind(this);
  }

  handleInput(event){
    event.preventDefault();
    // debugger
    APIUtil.searchUsers(this.input.value).then(this.renderResults);
  }

  renderResults(){
    console.log(this.input);
    // console.log(response);
  }
}

module.exports = UsersSearch;
