import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "sergiopgomes92@gmail.com",
      subject: "Nextflix",
      message:
        "Hello!%0D%0A%0D%0ASaw%20you%20web%20app%20Nextflix,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.",
      emailLink: "",
    };
    this.setState({
      emailLink: `mailto:${this.state.email}?subject=${this.state.subject}&body=${this.state.message}`,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Nextflix</h1>
            <section>
              <h3>Version: 1.0.0</h3>
            </section>
            <p className="lead">
              Nextflix is a web app built with React and NextJS consuming TMDB
              API.
            </p>
            <hr className="my-4" />
            <p class="font-weight-light">Developed by SergioPow</p>
            <address>
              <p class="font-italic">
                Reach me on:
                <a href={this.state.emailLink}>{this.state.email}</a>
              </p>
            </address>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
