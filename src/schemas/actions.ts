import { Learner } from "./entities";

export type Login = {
    teacherId: string;
    learnerCode: number;
}

export type LoginResult = 
| {successful: Learner}
| {failed: string}
