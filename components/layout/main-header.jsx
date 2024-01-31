import Link from "next/link";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
