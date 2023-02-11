/** @format */
import "../styles/navbar.module.scss";
import styles from "../styles/navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { MaterialSymbol } from "material-symbols";
import Icon from "react-material-symbols/outlined";
import {
  AppBar,
  Box,
  Drawer,
  Fab,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import * as React from "react";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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
          <Icon className="material-symbols-outlined">
            {item.icon}
          </Icon>
        </Link>
      ))}
    </ul>
  );
  return (
    <>
      <AppBar className="navbar">
        <Toolbar className="toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          >
            <span className="material-symbols-outlined">
              menu
            </span>
          </IconButton>
          <Link href="/new">
            <Fab
              className={styles.fab}
              aria-label="add"
            >
              <span className="material-symbols-outlined">
                add_box
              </span>
            </Fab>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <div className={styles.search}>
            <div className={styles.searchiconwrapper}>
              <SearchIcon />
            </div>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <span className="material-symbols-outlined">
            pets
          </span>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
      >
        {getList()}
      </Drawer>
    </>
  );
}
