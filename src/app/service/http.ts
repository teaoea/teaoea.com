import { HttpHeaders } from "@angular/common/http";

export const options = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
  observe: "response" as "response",
};

const authorization: any = localStorage.getItem("Authorization");
export const authOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: authorization,
  }),
  observe: "response" as "response",
};
