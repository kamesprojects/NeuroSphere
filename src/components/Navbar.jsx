import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header w-full">
      <nav className="container mx-auto flex items-center gap-6 px-4" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/rules">Rules</NavLink>
      </nav>
    </header>
  )
};