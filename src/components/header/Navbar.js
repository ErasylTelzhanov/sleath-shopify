import React from 'react'
import logo from '../../images/logo.svg'
import logoSubtract from '../../images/logo-subtract.svg'
import shoppingBag from '../../icons/shopping-bag.svg'
import chevronDown from '../../icons/chevron-down.svg'

function Logo() {
  return (
    <div className="nav__logo">
      <a href="#">
        <img src={logo} alt="лого" />
        <img src={logoSubtract} alt="лого" />
      </a>
    </div>
  )
}

function NavList() {
  return (
    <ul className="nav__list">
      <li className="nav__link nav__link-dropdown">
        <span>Прицел</span><img src={chevronDown} alt="Стрелка" className='nav__link_opened' />
      </li>
      <li className="nav__link"><a href="#">Винтовка+Прицел</a></li>
      <li className="nav__link"><a href="#">Бинокль</a></li>
      <li className="nav__link nav__link-dropdown">
        <span>Ещё</span><img src={chevronDown} alt="Стрелка" className='nav__link_opened' />
      </li>
    </ul>
  )
}

function NavListMoblie() {
  return (
    <div className="nav-list-mobile">
      <ul className="nav__list">
        <li className="nav__link nav__link-dropdown">
          <span>Прицел</span><img src={chevronDown} alt="Стрелка" className='nav__link_opened' />
        </li>
        <li className="nav__link"><a href="#">Винтовка+Прицел</a></li>
        <li className="nav__link"><a href="#">Бинокль</a></li>
        <li className="nav__link nav__link-dropdown">
          <span>Ещё</span><img src={chevronDown} alt="Стрелка" className='nav__link_opened' />
        </li>
      </ul>

      <div className="nav__login">
        <a href="#" className="nav__login-button">Войти</a>
        <a href="#" className="nav__shop-link">
          <img src={shoppingBag} alt="пакет шоппинг" />
        </a>
      </div>
    </div>
  )
}

function BurgerMenu() {
  return (
    <div className="nav__burger">
      <div className="nav__burger-line"></div>
      <div className="nav__burger-line"></div>
      <div className="nav__burger-line"></div>
    </div>
  )
}

function NavLogin() {
  return (
    <div className="nav__login">
      <a href="#" className="nav__login-button">Войти</a>
      <a href="#" className="nav__shop-link">
        <img src={shoppingBag} alt="пакет шоппинг" />
      </a>
    </div>
  )
}

// ***Экспортируемая навигация***
function Navbar() {
  return (
    <nav className="nav container">
      <Logo />
      <NavList />
      <NavLogin />
      <BurgerMenu />
      <NavListMoblie />
    </nav>
  );
}

export default Navbar