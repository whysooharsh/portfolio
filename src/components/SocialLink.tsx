import React from "react";

type SocialLinkProps = {
  href: string;
  label: string;
};

export function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-300 hover:text-purple-500 text-3xl font-semibold transition-colors"
    >
      {label}
    </a>
  );
}