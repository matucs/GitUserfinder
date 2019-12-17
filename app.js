
const github = new Github;
const ui = new UI;
// user input 
const input = document.getElementById('searchUser');

input.addEventListener('keyup', (e) => {
    const inputText = e.target.value;
    if (inputText !== '') {
        github.getUser(inputText).then(data => {
            if (data.profile.message == "Not Found") {
                //show allert
                ui.showAlert('user not found','alert alert-danger');
            } else {
                //show profile & repos
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        //clear profile
        ui.clearProfile();
    }
})
