// function WelcomeMassege({ isLoggedIn }) {

//   if (isLoggedIn) {
//     return <h1>Welcome Back!</h1>;
//   } else {
//     return <h1>Please Login</h1>;
//   }
// }
// export default WelcomeMassege;

function WelcomeMassege() {
  const isLoggedIn = false;

  return <div>{isLoggedIn ? <h1>Welcome!</h1> : <h1>Please Login</h1>}</div>;
}

export default WelcomeMassege;
