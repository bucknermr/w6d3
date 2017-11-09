const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'post',
      dataType: 'JSON',
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'delete',
      dataType: 'JSON',
    });
  },

  searchUsers: (queryVal) => {
    // debugger
    return $.ajax({
      url: '/users/search/',
      data: {
        query: queryVal
      },
      dataType: 'JSON'
    });
  }


};

module.exports = APIUtil;
