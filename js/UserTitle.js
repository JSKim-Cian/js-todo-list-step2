import { UserTitleTemplate } from './util/templates.js';

export default class UserTitle {
  constructor({ username, $targetUserTitle }) {
    this.username = username;
    this.$targetUserTitle = $targetUserTitle;
  }

  setState(selectedUsername) {
    this.username = selectedUsername;
    this.render();
  }

  render() {
    this.$targetUserTitle.innerHTML = UserTitleTemplate(
      this.username,
    );
  }
}