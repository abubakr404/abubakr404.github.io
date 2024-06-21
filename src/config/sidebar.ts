import { NavItem } from "@/types";
import {
  FaBook,
  FaCalendarDays,
  FaCircleQuestion,
  FaCircleUser,
  FaCompass,
  FaDollarSign,
  FaGear,
  FaHotel,
  FaPlus,
  FaUsersGear,
} from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { GiPayMoney, GiTicket } from "react-icons/gi";

export const adminSidebarNav: NavItem[] = [
  {
    path: "/admin",
    title: "navDashboard",
    icon: MdDashboard,
  },
  {
    path: "/admin/tickets",
    title: "navSupportCenter",
    icon: GiTicket,
  },
  {
    path: "/admin/bookings",
    title: "navBookings",
    icon: FaBook,
  },
  {
    path: "/admin/properties",
    title: "navProperties",
    icon: FaHotel,
  },
  {
    path: "/admin/users",
    title: "navUsers",
    icon: FaUsersGear,
  },
  {
    path: "/admin/hosts-dues",
    title: "navDues",
    icon: GiPayMoney,
  },
  {
    path: "/admin/dues-transctions",
    title: "navDuesTransactions",
    icon: GrTransaction,
  },
  // {
  //   path: "/admin/settings",
  //   title: "navSettings",
  //   icon: FaGear,
  // },
];

export const hostSidebarNav: NavItem[] = [
  {
    path: "/explore",
    title: "navExplore",
    icon: FaCompass,
  },
  {
    path: "/properties",
    title: "navProperties",
    icon: FaHotel,
  },
  {
    path: "/calendar",
    title: "navCalendar",
    icon: FaCalendarDays,
  },
  {
    path: "/bookings",
    title: "navBookings",
    icon: FaBook,
  },
  {
    path: "/professional-host",
    title: "navProfessionalHost",
    icon: FaDollarSign,
  },
  {
    path: "/properties/new",
    title: "navAddNewProperty",
    icon: FaPlus,
  },
  {
    path: "/profile",
    title: "navProfile",
    icon: FaCircleUser,
  },
  {
    path: "/settings",
    title: "navSettings",
    icon: FaGear,
  },
  {
    path: "/support-center",
    title: "navSupportCenter",
    icon: FaCircleQuestion,
  },
];
