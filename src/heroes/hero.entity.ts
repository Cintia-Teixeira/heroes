import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column({nullable: true})
    gender: string;

}