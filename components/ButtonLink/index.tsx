import { ReactNode } from "react";
import Link from "next/link";
interface Props {
  buttonStyle: "outline-dark" | "outline-light";
  targetUrl: string;
  children: ReactNode | ReactNode[];
  className?: string;
}

const styles = {
  "outline-dark":
    "outline outline-1 outline-eggshell rounded text-eggshell px-5 py-2",
  "outline-light":
    "outline outline-1 outline-black rounded text-black px-5 py-2",
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
          className={`${styles[buttonStyle]} ${className}`}
          href={targetUrl}
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <Link
          className={`${styles[buttonStyle]} ${className}`}
          href={targetUrl}
        >
          {children}
        </Link>
      )}
    </>
  );
}
