var profileArea = $('#profile-target');
var profileTemplate = $('#profile-template').html();

$.ajax('https://api.github.com/users/ColemanCox', {
  success: function(data) {
    console.log(data);
    var template = Handlebars.compile(profileTemplate);
    profileArea.html(template(data));
  }
});
