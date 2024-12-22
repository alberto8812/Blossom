import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { characters } from './characters.entities';

@Table({ tableName: 'species' })
export class species extends Model<species> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4, // Esto genera automáticamente un UUID v4
    })
    id: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    createdAt: Date;
    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    updatedAt: Date;

    @HasMany(() => characters)
    characters: characters[];

}