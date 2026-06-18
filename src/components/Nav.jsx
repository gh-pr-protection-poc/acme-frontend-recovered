export function Nav() {
  return (
    <nav className="nav nav--responsive">
      <ul className="nav__list nav__list--md-row nav__list--sm-stack">
        <li className="nav__item"><a href="/">Home</a></li>
        <li className="nav__item"><a href="/about">About</a></li>
        <li className="nav__item"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
