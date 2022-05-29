import axios from "axios";
import { UserService } from "./UserService";

jest.mock('axios');
    
describe("Using mock modules ", () => {
  test("should fetch users", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);
    return UserService.all().then((data) => expect(data).toEqual(users));
  });
});
