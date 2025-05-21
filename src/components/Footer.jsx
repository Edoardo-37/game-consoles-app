const Footer = () => {
  return (
    <footer className="mt-[1.5rem]">
      <p className="base-paragraph w-full text-xl font-bold text-base-content bg-base-200 text-center px-[2rem] py-[1rem] md:px-[6rem] py-[1rem]">
        Copyright &copy; {new Date().getFullYear()} - ConsoleVault <i>(Brand di fantasia)</i>{" "}
      </p>
    </footer>
  );
};

export default Footer;
