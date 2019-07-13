
class GitHub {
  constructor() {
    this.client_id = "4b215caba958ad744cae";
    this.client_secret = "8496cbaa422ca40585da45897d10085e948bda68";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.clclient_secret}`);

    const profile = await profileResponse.json();

    return {
      // in ES6+ same as write profile: profile
      profile
    }
  }
}
