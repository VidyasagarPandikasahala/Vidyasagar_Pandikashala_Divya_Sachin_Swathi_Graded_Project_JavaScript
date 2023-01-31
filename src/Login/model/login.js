const state = {};

function setValidCredential() {
  localStorage.setItem("username", "admin");
  localStorage.setItem("password", "admin");

  localStorage.setItem("user", "user");
  localStorage.setItem("pass", "user");
}

function getValidCredential() {
  return {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),

    user: localStorage.getItem("user"),
    pass: localStorage.getItem("pass"),
  };
}

function validateCredentials({ username, password }) {
  const validCredential = getValidCredential();

  if (
    username !== validCredential.username &&
    username !== validCredential.user
  ) {
    return "Invalid Username";
  }
  if (
    password !== validCredential.password &&
    password !== validCredential.pass
  ) {
    return "Invalid Password";
  }
  return "Valid Credential";
}

export const loginModel = {
  state: state,
  methods: {
    setValidCredential,
    getValidCredential,
    validateCredentials,
  },
};
