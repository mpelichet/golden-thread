import { Charity } from '../models/charity';

export class User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    moneydonated: number;
    charities: Array<Charity>;

}