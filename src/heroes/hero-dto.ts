import { IsNotEmpty } from 'class-validator';

export class HeroDto {

    id: number;

    @IsNotEmpty()
    name: string;
    
    age: number;
}