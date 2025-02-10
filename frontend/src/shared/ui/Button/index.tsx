import "./Button.css"
import Link from "next/link";

export const Button = () => {
  return (
    <Link href="/" className="button-container">
      <div className="button-text">Записаться онлайн</div>
    </Link>
  );
};
