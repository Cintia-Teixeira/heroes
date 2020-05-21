import { SelectQueryBuilder } from "typeorm";
import { GenderAndAgeQueryDto } from "src/heroes/query.dto";

export class CustomQueryBuilder<T>{
    constructor(private queryBuilder: SelectQueryBuilder<T>, private type: string) { }

    public getQuery(query: GenderAndAgeQueryDto) {
        const keys = Object.getOwnPropertyNames(query);

        keys.forEach((key, index) => {

            const strQuery = `${this.type}.${key} = :${key}`;
            const param = { [key]: query[key] };

            !index
                ? this.queryBuilder.where(strQuery, param)
                : this.queryBuilder.andWhere(strQuery, param);

        });

        return this;

    }

    public getLimit(limit: number) {
        this.queryBuilder.take(limit);
        return this;
    }

    public getPage(page: number) {
        this.queryBuilder.skip(page);
        return this;
    }

    public build() {
        return this.queryBuilder;
    }

}