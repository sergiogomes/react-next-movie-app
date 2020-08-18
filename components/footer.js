const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy; Your Website {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
