import { ReactNode } from "react";
import Link from "next/link";
interface Props {
  buttonStyle: "outline-dark" | "outline-light";
  targetUrl: string;
  children: ReactNode | ReactNode[];
  className?: string;
}

const styles = {
  "outline-dark": "outline outline-1 outline-eggshell rounded text-eggshell",
  "outline-light": "outline outline-1 outline-black rounded text-black",
};

export default function ButtonLink({
  buttonStyle,
  targetUrl,
  children,
  className,
}: Props) {
  return (
    <>
      {targetUrl.includes("http") ? (
        <a
          className={`${styles[buttonStyle]} ${className} font-inconsolata font-medium text-2xl px-6 py-4`}
          href={targetUrl}
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <Link
          className={`${styles[buttonStyle]} ${className} font-inconsolata font-medium text-2xl px-6 py-4`}
          href={targetUrl}
        >
          {children}
        </Link>
      )}
    </>
  );
}
