const Header = () => {
  return (
    <>
      <header className="bg-w1">
        <nav className="container py-5">
          <ul className="flex items-center justify-between flex-wrap gap-5 *:*:font-jost *:*:font-semibold *:*:block *:*:text-t1">
            <li>
              <a href="./" className="text-5xl leading-[1.12] ">
                Allan Silva
              </a>
            </li>
            <li>
              <a href="#contato" className="text-[2rem] leading-[1.2]">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
