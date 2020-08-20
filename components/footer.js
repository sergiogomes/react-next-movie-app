const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container-fluid">
        <p className="m-0 text-center c-red">
          Copyright &copy; Nextflix {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
