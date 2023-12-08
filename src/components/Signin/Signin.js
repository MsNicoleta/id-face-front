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
            <fieldset id="sign_up" className="border border-transparent px-0 mx-0">
              <legend className="text-2xl font-semibold px-0 mx-0">Sign In</legend>
              <div className="mt-3">
                <label className="block font-semibold leading-tight text-sm" htmlFor="email-address">Email</label>
                <input
                  placeholder='@example.com'
                  className="p-2 border  rounded  bg-transparent hover:bg-black hover:text-white w-full"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="my-3">
                <label className="block font-semibold leading-tight text-sm" htmlFor="password">Password</label>
                <input
                  placeholder='******'
                  autoComplete="current-password"
                  className=" rounded p-2 border bg-transparent hover:bg-black hover:text-white w-full"
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
                className="font-bold px-4 py-1 border rounded border-red bg-transparent hover:scale-105 cursor-pointer text-sm inline-block"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="leading-tight mt-3">
              <p onClick={() => onRouteChange('register')} className="text-sm link dim black db cursor-pointer hover:scale-105">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
