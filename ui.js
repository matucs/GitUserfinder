class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    showProfile(user) {
        this.profile.innerHTML = `
            <div class = " card card-body mb-3">
                <div class="row">
                    <div class="col-md-3" >
                        <img class="img-fluid mb-2" src="${user.avatar_url}" />
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4" >View Profile</a>
                     </div>
                     <div class="col-md-9" >
                        <span class="badge badge-primary col-md-3 col-sm-6 col-xs-3 mt-2" >Public repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary col-md-2 col-sm-5 col-xs-3 mt-2" >Public Gists: ${user.gists}</span>
                        <span class="badge badge-success col-md-3 col-sm-6 col-xs-3 mt-2" >Followers: ${user.followers}</span>
                        <span class="badge badge-info col-md-2 col-sm-5 col-xs-3 mt-2" >Following: ${user.following}</span>
                        <br><br>
                            <ul class="list-gorup" style="padding-inline-start: 0px">
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Created: ${user.created_at}</li>
                            </ul>
                     </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
`
    }
    showRepos(repos) {
        var output = '';
        repos.forEach(repo => {
            output +=
                `<div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                        <a target="_blank" href=${repo.html_url}>${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary col-md-3 col-sm-6 col-xs-3 mt-2" >Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary col-md-3 col-sm-6 col-xs-3 mt-2" >Whatchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success col-md-3 col-sm-6 col-xs-3 mt-2" >Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
        `
        });
        document.getElementById('repos').innerHTML = output;
    }
    clearProfile() {
        this.profile.innerHTML = '';
    }
    showAlert(message, className) {
        var alert = document.querySelector('.alert');
        if (!alert) {
            //create allert div
            var div = document.createElement('div');
            div.className = className;

            //create text node
            div.appendChild(document.createTextNode(message));

            // add the alert into dom
            var container = document.querySelector('.searchContainer');
            var search = document.querySelector('.search');

            container.insertBefore(div, search);
        }

        //disapear alert after 3 second
        this.clearAlert();
    }
    clearAlert() {
        var alert = document.querySelector('.alert');
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}