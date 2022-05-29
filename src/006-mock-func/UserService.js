import axios from "axios";

export class UserService {
  /**
   *
   * @returns get all users from API
   */
  static async all() {
    const resp = await axios.get("http://localhost:8080/app/users.json");
    return resp.data;
  }
}
