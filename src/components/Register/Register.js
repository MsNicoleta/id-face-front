import React from 'react';


class Register extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
      email: '',
        password: '',
        name:'',
      

    }
  }
  onNameChange = (event) => { 
      this.setState({name: event.target.value });
      
  onEmailChange = (event) => { 
    this.setState({email:event.target.value});
  }
  onPasswordChange = (event) => { 
    this.setState({password:event.target.value});
  }
      
      onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
        name: this.state.name
      })
    })
      // console.log(this.state);
      .then(response => response.json())
      .then(user => {
          if (user) {
            this.props.loadUser = (user)
            this.props.onRouteChange('home');
        }
        console.log(this.state);
      })
    }
      render() {
        return (
            <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" type="full-name" htmlFor="full-name">Full Name</label>
                                <input className="pa2 input-reset b--black ba bg-transparent hover-bg-black hover-white w-100"
                                    type="name"
                                    name="name"
                                    id="name"
                                    onChange = {this.onNameChange}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" type="email" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset b--black ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange = {this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" type="password" htmlFor="password">Password</label>
                                <input className="b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange = {this.onPasswordChange}/>
                            </div>

                        </fieldset>
                        <div className="">
                            <input
                                onclick={this.onSubmitSignIn() => onRouteChange('home')}
                                className="b ph3 pv2 input-reset ba br2 b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                alue="Sign in"
                            />
                        </div>

                    </div>
                </main>
            </article>
        );
    }
}

export default Register;
