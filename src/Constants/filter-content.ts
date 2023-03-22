import { listNames } from "./constants";

export const menuItems = [
  listNames.designations,
  listNames.industry,
  listNames.country,
  listNames.subscribers,
  listNames.unsubscribers,
];

export type Checklists = {
  [listNames.country]: string[];
  [listNames.designations]: string[];
  [listNames.industry]: string[];
  [listNames.subscribers]: string[];
  [listNames.unsubscribers]: string[];
};

export const checklists: Checklists = {
  [listNames.country]: [
    "Australia",
    "Canada",
    "Indonesia",
    "Malayasia",
    "Saudi Arabia",
    "Singapore",
    "South Africa",
    "UAE",
    "USA",
    "United Kindom",
  ],

  [listNames.designations]: [
    "(CEO) - Chief Executive Office",
    "(CTO) - Chief Technology Officer",
    "Founder",
    "Director",
    "Vice President (VP)",
    "Owner",
    "(CIO) - Chief Information Officer",
    "VP of Technologies",
  ],

  [listNames.industry]: [
    "Retail",
    "Consumer goods",
    "Consumer services",
    "Appreal & Fashions",
    "Oil & Energy",
    "Logistics",
    "Internet",
    "Hospital & Healthcare",
  ],

  [listNames.subscribers]: [],

  [listNames.unsubscribers]: ["Soft Bounce", "Hard Bounce"],
};
