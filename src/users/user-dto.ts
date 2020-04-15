import { IsNotEmpty } from 'class-validator';

export class UserDto {

    name: string;
    age: number;
    email: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

}