import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  }

  onSubmitSignIn = () => {
    fetch('https://face-id-backend-heroku-e1390d18d445.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
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
    const { onRouteChange } = this.props;
    return (
      <article className="  rounded-lg bg-silver  my-4 w-full md:w-1/2 lg:w-1/4 max-w-md shadow-lg mx-auto">
        <main className="p-4 text-gray-800">
          <div className="measure">
            <fieldset id="sign_up" className="border border-transparent px-0 mx-0 mt-5">
              <legend className="text-2xl font-semibold px-0 mx-0 mt-6">Sign In</legend>
              <div className="mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-address mt-8">Email</label>
                <input
                  placeholder='@example.com'
                  className="p-2 shadow-inner p-3 rounded  bg-transparent hover:bg-black hover:text-white w-full"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="my-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input
                  placeholder='******'
                  autoComplete="current-password"
                  className=" rounded p-3 shadow-inner  bg-transparent hover:bg-black hover:text-white w-full mb-3"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="font-bold  py-3  rounded bg-transparent  cursor-pointer text-sm inline-block shadow-md hover:bg-black hover:text-white w-full"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="leading-tight mt-3">
              <p onClick={() => onRouteChange('register')} className=" rounded bg-transparent mb-8 link dim black  cursor-pointer py-3  text-sm inline-block shadow-md hover:bg-black hover:text-white w-full">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
