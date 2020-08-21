import React from "react";

import packageJson from "../package.json";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "sergiopgomes92@gmail.com",
      subject: "Nextflix",
      message:
        "Hello!%0D%0A%0D%0ASaw%20you%20web%20app%20Nextflix,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.",
      tags: [
        "nextjs",
        "react",
        "nodejs",
        "express",
        "axios",
        "vercel",
        "movies",
      ],
      emailLink: "",
      changelog: "",
      version: "",
    };
  }

  componentDidMount() {
    this.setState({
      emailLink: `mailto:${this.state.email}?subject=${this.state.subject}&body=${this.state.message}`,
    });
    if (process && process.env && process.env.VERCEL_GITHUB_COMMIT_REF) {
      console.log(process.env.VERCEL_URL);
      console.log(process.env.VERCEL_GITHUB_DEPLOYMENT);
      console.log(process.env.VERCEL_GITHUB_ORG);
      console.log(process.env.VERCEL_GITHUB_REPO);
      console.log(process.env.VERCEL_GITHUB_COMMIT_ORG);
      console.log(process.env.VERCEL_GITHUB_COMMIT_REPO);
      console.log(process.env.VERCEL_GITHUB_COMMIT_REF);
      console.log(process.env.VERCEL_GITHUB_COMMIT_SHA);
      console.log(process.env.VERCEL_GITHUB_COMMIT_AUTHOR_LOGIN);
      console.log(process.env.VERCEL_GITHUB_COMMIT_AUTHOR_NAME);
      this.setState({
        changelog: process.env.VERCEL_GITHUB_COMMIT_REF,
      });
    }
    if (packageJson && packageJson.version) {
      this.setState({
        version: packageJson.version,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container">
            <div className="jumbotron">
              <h1 className="display-4">Nextflix</h1>
              <section>
                <h4>Version: {this.state.version || "1.0.0"}</h4>
                <ul className="list-group-horizontal-sm mb-4">
                  {this.state.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-pill badge-dark mr-1 mt-1"
                    >
                      {tag}
                    </span>
                  ))}
                </ul>
              </section>
              <p className="lead c-dark">
                A beautiful web app built on React and NextJS framework,
                consuming TMDB API.
              </p>
              <hr className="my-4" />
              <p className="font-weight-light">Developed by SergioPow</p>
              <address>
                <p className="font-italic">
                  Reach me on:
                  <a
                    className="badge badge-pill badge-dark ml-1"
                    href={this.state.emailLink}
                  >
                    {this.state.email}
                  </a>
                </p>
              </address>
              {this.state.changelog && (
                <React.Fragment>
                  <hr className="my-4" />
                  <section>
                    <h4>Changelog:</h4>
                  </section>
                  <p className="lead c-dark">{this.state.changelog}</p>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
