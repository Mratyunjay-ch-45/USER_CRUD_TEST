const { createUser } = require("../../controller/user");

jest.setTimeout(15000); 

describe("User Controller - createUser", () => {
  it("should return 400 if required fields are missing", async () => {
    const req = {
      body: {
        email: "", fname: "", lname: "", dob: "", password: "", gender: ""
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "All fields are required"
    });
  });
});
