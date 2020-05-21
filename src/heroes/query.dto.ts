import { Exclude } from "class-transformer";

export class GenderAndAgeQueryDto {

    gender: string;

    age: number;

    @Exclude()
    page: number;
    
    @Exclude()
    limit: number;

}