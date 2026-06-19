import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatBreadcrumb = (str) => {
    return str
      .replace(/-/g, " ")               
      .replace(/\b\w/g, (ch) => ch.toUpperCase());
  };

  return (
    <nav aria-label="breadcrumb" className="my-3">
      <ol className="breadcrumb" style={{ "--bs-breadcrumb-divider": "'>'" }}>
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={name} className="breadcrumb-item active" aria-current="page">
              {formatBreadcrumb(name)}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item">
              <Link to={routeTo}>{formatBreadcrumb(name)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
