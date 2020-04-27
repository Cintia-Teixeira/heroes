import { IsNotEmpty } from 'class-validator';

export class UserDto {

    name: string;
    age: number;
    email: string;

    @IsNotEmpty({message: "The user must have a name"})
    username: string;

    @IsNotEmpty({message: "The user must have a password"})
    password: string;

}