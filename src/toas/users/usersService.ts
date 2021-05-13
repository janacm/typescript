import { create } from "domain";
import { User } from "./user";

// Post request should not contain an id
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UsersService {
    public get(id: number, name?: string): User {
        return {
            id,
            email: "janac@doe.com",
            name: name ?? "janac doe",
            status: "Happy",
            phoneNumbers: []
        }
    }

    public create(userCreationParams: UserCreationParams): User {
        return {
            id: Math.floor(Math.random() * 10000),
            status: "Happy",
            ...userCreationParams
        };
    }
}