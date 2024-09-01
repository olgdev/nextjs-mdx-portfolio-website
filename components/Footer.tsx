import React, { SVGProps } from "react";

const navigation = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fill="currentColor"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9a1 1 0 000 2h5a1 1 0 000-2zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z"
        />
      </svg>
    )
  },
  {
    name: "X",
    href: "#",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fill="currentColor"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9a1 1 0 000 2h5a1 1 0 000-2zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z"
        />
      </svg>
    )
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fill="currentColor"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9a1 1 0 000 2h5a1 1 0 000-2zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z"
        />
      </svg>
    )
  }
];

const Footer = ({}) => {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl">
        <div className="md:flex md:items-center md:justify-between">
          <nav className="flex justify-center space-x-6 md:order-2">
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
          </nav>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://github.com/michal-z" target="_blank">
                Oleh Miroshnychenko
              </a>
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
