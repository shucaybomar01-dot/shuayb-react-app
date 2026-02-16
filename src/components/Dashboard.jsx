function Dashboard() {
  const isLoggedIn = false;

  return <div>{isLoggedIn ? <h1>Welcome!</h1> : <h1>Please Login</h1>}</div>;
}

export default Dashboard;
