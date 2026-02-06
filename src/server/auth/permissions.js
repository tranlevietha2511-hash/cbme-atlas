export const Roles = Object.freeze({
  ADMIN: "admin",
  TRAINING: "training",
  QA: "qa",
  DEPT: "department",
  FACULTY: "faculty",
  TUTOR: "tutor",
  STUDENT: "student",
});

// Minimal example: role -> allowed route prefixes
export const RoleRouteAllowList = Object.freeze({
  [Roles.ADMIN]: ["/admin", "/api"],
  [Roles.QA]: ["/qa", "/api"],
  [Roles.FACULTY]: ["/faculty", "/api"],
  [Roles.TUTOR]: ["/tutor", "/api"],
  [Roles.STUDENT]: ["/student", "/api"],
});
