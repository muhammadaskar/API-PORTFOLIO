import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "projects",
})
export class Projects extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    slug!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    objective!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    tools!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    link!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    image!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    category!: string;
}