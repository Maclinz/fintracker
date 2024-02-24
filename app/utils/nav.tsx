import {
  barchart,
  card,
  clock,
  dashboard,
  help,
  logout,
  loop,
  notebook,
  settings,
} from "./Icons";

const nav = [
  {
    title: "Dashboard",
    icon: dashboard,
    link: "/",
  },
  {
    title: "Transactions",
    icon: loop,
    link: "/transactions",
  },
  {
    title: "Payments",
    icon: card,
    link: "/payments",
  },
  {
    title: "Analytics",
    icon: barchart,
    link: "/analytics",
  },
  {
    title: "Help",
    icon: help,
    link: "/help",
  },
  {
    title: "History",
    icon: clock,
    link: "/history",
  },
  {
    title: "Notes",
    icon: notebook,
    link: "/notes",
  },
  {
    title: "Settings",
    icon: settings,
    link: "/settings",
  },
  {
    title: "Logout",
    icon: logout,
    link: "/logout",
  },
];

export default nav;
