const email = "sergiopgomes92@gmail.com";
const subject = "Nextflix";
const message =
  "Hello!%0D%0A%0D%0ASaw%20you%20web%20app%20Nextflix,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.";
const emailLink = `mailto:${email}?subject=${subject}&body=${message}`;

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Contact</h1>
            <div className="bd-example">
              <address>
                <strong>Address</strong>
                <br />
                135, Americo Campolina Rezende
                <br />
                Brazil, 31910385
                <br />
                <abbr title="Phone">P:</abbr> +55 (31) 98733-9600
              </address>

              <address>
                <strong>Sérgio Pow Gomes</strong>
                <br />
                <a className="badge badge-pill badge-dark" href={emailLink}>
                  {email}
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
