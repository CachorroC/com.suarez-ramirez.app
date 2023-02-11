/** @format */
import "../styles/navbar.module.scss";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import type Open from "../types/link.interface"
import React from "react";
const data = [
  { name: "Home", page: "/", icon: "cottage" },
  {
    name: "About",
    page: "/about",
    icon: "unknown_document",
  },
  {
    name: "First Post",
    page: "/post/first",
    icon: "looks_one",
  },
  {
    name: "Second Post",
    page: "/post/second",
    icon: "looks_two",
  },
  {
    name: "Mqtt",
    page: "/mqtt",
    icon: "movie_edit",
  },
  {
    name: "Pets",
    page: "/pets",
    icon: "pets",
  },
  { name: "Top", page: "/top", icon: "pan_tool_alt" },
  {
    name: "Api",
    page: "/api/movies",
    icon: "movie_edit",
  },
  {
    name: "Trash",
    page: "/api",
    icon: "delete",
  },
];


//& default export
export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const getList = () => (
    <ul
      onClick={() => setOpen(false)}
      className={styles.list}
    >
      {data.map((item, index) => (
        <Link
          href={item.page}
          key={index}
          className={styles.item}
        >
          <p>{item.name}</p>
          <span
            className="material-symbols-outlined"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          >
            {item.icon}
          </span>
        </Link>
      ))}
    </ul>
  );
  return (
    <>
      <nav className="navbar">
        <span className="material-symbols-outlined">
          menu
        </span>

        <Link href="/new">
          <div
            className={styles.fab}
            aria-label="add"
          >
            <span className="material-symbols-outlined">
              add_box
            </span>
          </div>
        </Link>
      
        <div className={styles.search}>
          <div className={styles.searchiconwrapper}>
            <span className="material-symbols-outlined">
              search
            </span>
          </div>
          
        </div>

        <span className="material-symbols-outlined">
          pets
        </span>
      </nav>
      
      <div
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
      >
        {getList()}
      </div>
    </>
  );
}
