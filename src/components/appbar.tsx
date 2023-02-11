import "../styles/navbar.module.css";

const paginas = [
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

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
}
