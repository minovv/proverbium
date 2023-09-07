const isLoggedIn = true

// const welcomeMessage = isLoggedIn
//   ? alert(
//       "Welcome Guest! Just search Google for new proverbs and idioms in the language you are learning, learn and add them to the list."
//     )
//   : alert("Please log in")

// Short circuit evaluation used to call the default value for the user name if it's not provided (user is not logged in)
function printUserName(name) {
  console.log(name || "User")
}
