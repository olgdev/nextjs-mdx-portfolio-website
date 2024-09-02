"use client";
import React from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const Header = ({}) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-md">
      <nav className="container flex max-w-3xl items-center justify-between px-4">
        <Link href="/" className="font-serif text-2xl font-bold">
          OM
        </Link>

        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
