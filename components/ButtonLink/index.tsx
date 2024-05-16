import { ReactNode } from "react";
import Link from "next/link";
import { Inconsolata } from "next/font/google";

interface Props {
  buttonStyle: "outline-dark" | "outline-light";
  targetUrl: string;
  children: ReactNode | ReactNode[];
  className?: string;
}

const fontInconsolata = Inconsolata({ subsets: ["latin"] });

const styles = {
  "outline-dark": "outline outline-1 outline-eggshell rounded text-eggshell",
  "outline-light": "outline outline-1 outline-black rounded text-black",
};

const commonStyles = `${fontInconsolata.className} font-medium text-2xl px-6 py-4`;

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
          className={`${styles[buttonStyle]} ${className} ${commonStyles}`}
          href={targetUrl}
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <Link
          className={`${styles[buttonStyle]} ${className} ${commonStyles}`}
          href={targetUrl}
        >
          {children}
        </Link>
      )}
    </>
  );
}
