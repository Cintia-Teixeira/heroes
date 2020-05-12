import { IsNotEmpty } from 'class-validator';

export class HeroDto {

    id: number;

    @IsNotEmpty({message: 'The hero must have a name'})
    name: string;

    age: number;

    isEnabled?: boolean = true;
}