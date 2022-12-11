import ConsultantModel from "@models/consultant/consultant";

export const IN_MEMORY_CONSULTANTS: ConsultantModel[] = [
  {
    occupation: "Software Engineer",
    name: "Alex Burley",
    description: "SSE @ Cazoo. Backend focused with 9 years experience",
    tags: ["tech", "software-engineering", "startups"],
  },
  {
    occupation: "Headteacher",
    name: "Linda Priest",
    description: "CEO of Cornwall Learning Trust and Ofsted Inspector",
    tags: ["education", "executive-management"],
  },
  {
    occupation: "Teacher",
    name: "Dave Billings",
    description: "New teacher at one of the best schools in the UK",
    tags: ["education"],
  },
  {
    occupation: "City Planner",
    name: "Rachel Priest",
    description: "Principle City Planner at Transport for the North",
    tags: ["transport", "engineering", "city-planning"],
  },
  {
    occupation: "Industrial Manager",
    name: "Mick Billings",
    tags: ["education", "investment", "industry"],
  },
  {
    occupation: "Linguist",
    name: "Anna Billings",
    tags: ["languages"],
  },

  {
    occupation: "Actor",
    name: "George Clooney",
    tags: ["entertainment"],
  },
  {
    occupation: "Pharmacist",
    name: "Lauren Billings",
    tags: ["travel", "health"],
  },
  {
    occupation: "Doctor",
    name: "Michel Benito",
    tags: ["health"],
  },
  {
    occupation: "Engineering Manager",
    name: "Monet Milton",
    tags: ["tech", "software-engineering", "startups"],
  },
  {
    occupation: "Director",
    name: "Francis Billings",
    tags: ["health", "executive-management"],
  },
  {
    occupation: "Project Manager",
    name: "Sam Smithfield",
    tags: [],
  },
  {
    occupation: "Data Scientist",
    name: "John Klifford",
    tags: ["tech", "physics", "data-science", "software-engineering"],
  },
]
  .map((item, index) => ({
    ...item,
    display:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",
    description:
      item.description ||
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    id: index.toString(),
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  }))
  .map((c) => new ConsultantModel(c));
