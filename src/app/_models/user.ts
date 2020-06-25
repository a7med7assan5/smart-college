import { Role } from "./role";

export class User {
    _id: string;
    name: string;
    email: string;
    role: Role;
    created_at: Date;
    courses: [string];
    accessToken: string;
}
