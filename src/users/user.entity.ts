import { Entity, Column, PrimaryColumn, Generated } from "typeorm";

@Entity()
export class User {

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    email: string

    @PrimaryColumn()
    username: string

    @Column()
    password: string

    /*@Generated()
    userId: number*/

}