import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oleh-miroshnychenko",
    icon: (props: IconProps & React.RefAttributes<SVGSVGElement>) => (
      <LinkedInLogoIcon {...props} />
    )
  },
  {
    name: "X",
    href: "#",
    icon: (props: IconProps & React.RefAttributes<SVGSVGElement>) => (
      <TwitterLogoIcon {...props} />
    )
  },
  {
    name: "GitHub",
    href: "https://github.com/olgdev",
    icon: (props: IconProps & React.RefAttributes<SVGSVGElement>) => (
      <GitHubLogoIcon {...props} />
    )
  }
];

const Footer = ({}) => {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl px-4">
        <div className="md:flex md:items-center md:justify-between">
          <nav className="flex justify-center space-x-6 md:order-2">
            {socialMedia.map(item => (
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
              <a href="https://github.com/olgdev" target="_blank">
                Oleh Miroshnychenko
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
