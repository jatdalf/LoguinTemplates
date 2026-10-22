import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import style from "./navBar.module.css";

const templates = [
  { id: "01", name: "Background Image" },
  { id: "02", name: "Animated Logo" },
  { id: "03", name: "Carousel" },
  { id: "04", name: "Background Video" },
  { id: "05", name: "Matrix Style" },
  { id: "06", name: "Future" },
  { id: "07", name: "Neon Lights" },
  { id: "08", name: "Multiple Logo Animations" },
  { id: "09", name: "Dark and Blue" },
  { id: "10", name: "Editorial / Paper" },
  { id: "11", name: "Moonlit Portal" },
  { id: "12", name: "Prism / Liquid Light" },
];

const Header = () => {
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef(null);
  const templatesButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const { pathname } = useLocation();

  const isTemplatePage = /^\/login(?:0[1-9]|1[0-2])\/?$/i.test(pathname);

  useEffect(() => {
    setTemplatesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setTemplatesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key !== "Escape") return;

      if (templatesOpen) {
        setTemplatesOpen(false);
        templatesButtonRef.current?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [templatesOpen, mobileOpen]);

  const closeNavigation = () => {
    setTemplatesOpen(false);
    setMobileOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `${style.navLink} ${isActive ? style.active : ""}`;

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link
          to="/"
          className={style.brand}
          aria-label="Login Templates — start"
          onClick={closeNavigation}
        >
          <span className={style.brandMark}>lt.</span>
          <span className={style.brandName}>
            Login<span>Templates</span>
          </span>
        </Link>

        <button
          ref={mobileButtonRef}
          type="button"
          className={style.mobileToggle}
          aria-expanded={mobileOpen}
          aria-controls="main-navigation"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => {
            setMobileOpen((open) => !open);
            setTemplatesOpen(false);
          }}
        >
          <span aria-hidden="true">{mobileOpen ? "✕" : "☰"}</span>
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${style.navigation} ${
            mobileOpen ? style.navigationOpen : ""
          }`}
        >
          <NavLink
            to="/Home"
            className={linkClass}
            onClick={closeNavigation}
          >
            Collection
          </NavLink>

          <div
            className={style.dropdown}
            ref={dropdownRef}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setTemplatesOpen(false);
              }
            }}
          >
            <button
              ref={templatesButtonRef}
              type="button"
              className={`${style.templatesToggle} ${
                isTemplatePage || templatesOpen ? style.active : ""
              }`}
              aria-expanded={templatesOpen}
              aria-controls="templates-navigation"
              onClick={() => setTemplatesOpen((open) => !open)}
            >
              Templates
              <svg
                className={`${style.chevron} ${
                  templatesOpen ? style.chevronOpen : ""
                }`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {templatesOpen && (
              <div
                id="templates-navigation"
                className={style.dropdownPanel}
              >
                <p className={style.dropdownTitle}>
                  EXPLORE THE INTERFACES
                </p>

                <ul className={style.templateList}>
                  {templates.map((template) => (
                    <li key={template.id}>
                      <NavLink
                        to={`/login${template.id}`}
                        className={({ isActive }) =>
                          `${style.templateLink} ${
                            isActive ? style.templateActive : ""
                          }`
                        }
                        onClick={closeNavigation}
                      >
                        <span className={style.templateNumber}>
                          {template.id}
                        </span>
                        <span>{template.name}</span>
                        <span
                          className={style.templateArrow}
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <NavLink
            to="/About"
            className={linkClass}
            onClick={closeNavigation}
          >
            About me
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `${style.contactLink} ${isActive ? style.contactActive : ""}`
            }
            onClick={closeNavigation}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;