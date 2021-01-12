const handleLogin = (e) => {
  e.preventDefault();
  const usernameThroughEvent = e.target[0].value;
  const usernameThroughDocument = document.getElementById("username").value;
  const passwordThroughEvent = e.target[1].value;
  const passwordThroughDocument = document.getElementById("password").value;
  console.log("event: ", usernameThroughEvent);
  console.log("document: ", usernameThroughDocument);
  console.log("event: ", passwordThroughEvent);
  console.log("document: ", passwordThroughDocument);
  const userThroughEvent = {
    username: usernameThroughEvent,
    password: passwordThroughEvent,
  };
  const userThroughDocument = {
    username: usernameThroughDocument,
    password: passwordThroughDocument,
  };
  // send user data to backend
};
