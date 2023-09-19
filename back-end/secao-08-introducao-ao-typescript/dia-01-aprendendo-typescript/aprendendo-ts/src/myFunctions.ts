import { User } from "./types/User";

export const getUserNames = (users: User[]): string[] => {
  const names = users.map((user) => user.name);
  return names;
};

export const getUsersByRepoQuantity = (users: User[], repos: number): string[] => {
  const filteredUsers = users.filter((user) => user.repositories >= repos)
    .map((user) => user.name);
  return filteredUsers;
};

export const IsMostActiveUser = (name: string, users: User[]): boolean => {
  const mostActiveUser = users.reduce(
    (prev, curr) => 
      (prev.repositories > curr.repositories ? prev : curr),
  );
  return mostActiveUser.name === name;
};
