import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize, } from "sequelize";

export class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>>{
    declare petId: number;
    declare name: string;
    declare type: string;
    declare age: number; 
    declare gender: string;
    declare description: string;
    declare imgURL: string;
    declare createdOn?: Date;
    declare updatedOn?: Date;
}
export function PetFactory(sequelize: Sequelize) {
    Pet.init({
        petId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgURL: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdOn: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedOn: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'pet',
        sequelize
    });
} 