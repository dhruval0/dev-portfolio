import Link from "next/link";
import { backToDeskStyles as s } from "./BackToDesk.styles";

export function BackToDesk() {
  return (
    <Link href="/" className={s.link}>
      <span className={s.label}>← back to the desk</span>
    </Link>
  );
}
