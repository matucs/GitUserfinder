class Github {
    constructor() {
        this.client_id = '15e36faa2d878a88b5d6'
        this.client_secret = '347ce0bfa7c2d5137bd51b9c2f24984b2b2bbab7',
        this.repos_count= 5;
        this.repos_sort= 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await this.getUserRepos(user);
        return {
            profile,
            repos
        }
    }
    async getUserRepos(user) {
        var data = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        var repos = await data.json();
        return  repos
    }
}