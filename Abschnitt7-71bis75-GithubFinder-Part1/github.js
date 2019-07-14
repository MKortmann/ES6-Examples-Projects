
class GitHub {
  constructor() {
    this.client_id = "4b215caba958ad744cae";
    this.client_secret = "8496cbaa422ca40585da45897d10085e948bda68";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

// this method getUser will return the profile and the repos of the user.
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      // in ES6+ same as write profile: profile
      profile,
      repos
    }
  }
}
