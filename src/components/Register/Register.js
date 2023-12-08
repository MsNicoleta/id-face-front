import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onSubmitSignIn = () => {
    fetch('https://face-id-backend-heroku-e1390d18d445.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
        console.log(this.state);
      })
  }
  render() {
    return (
      <article className="rounded overflow-hidden bg-silver my-4 shadow-lg mx-auto w-full md:w-1/2 lg:w-1/4">
        <main className="px-6 py-4">
          <div className="text-2xl font-semibold my-4 mb-2">Register</div>
          <div className="my-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
            <input className=" p-2 shadow-inner  rounded  bg-transparent hover:bg-black hover:text-white w-full"
              type="name"
              name="name"
              id="name"
              onChange={this.onNameChange}
              placeholder='John Doe' />
          </div>
          <div className="my-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-address">Email</label>
            <input className=" p-2 shadow-inner  rounded  bg-transparent hover:bg-black hover:text-white w-full"
              type="email"
              name="email-address"
              id="email-address"
              onChange={this.onEmailChange}
              placeholder='@example.com' />
          </div>
          <div className="my-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className=" p-2 shadow-inner  rounded  bg-transparent hover:bg-black hover:text-white w-full"
              type="password"
              name="password"
              id="password"
              onChange={this.onPasswordChange}
              placeholder='******' />
          </div>
          <div className="my-3">

            <input
              onClick={this.onSubmitSignIn}
              className="font-bold  py-3  rounded bg-transparent  cursor-pointer text-sm inline-block shadow-md hover:bg-black hover:text-white w-full mt-4 mb-6"
              type="submit"
              value="Register"
            />
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
