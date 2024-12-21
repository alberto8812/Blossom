import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { origins } from './origin.entities';
import { species } from './species.entities';

@Table({ tableName: 'characters' })
export class characters extends Model<characters> {
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
        type: DataType.TEXT,
        allowNull: true,
    })
    status: string;
    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    img: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    species: string;

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

    @ForeignKey(() => origins)
    @Column({
        type: DataType.UUID,
        allowNull: true,
    })
    originId: string;

    @BelongsTo(() => origins)
    origin: origins;

    @ForeignKey(() => species)
    @Column({
        type: DataType.UUID,
        allowNull: true,
    })
    speciesId: string;

    @BelongsTo(() => species)
    specie: species;
}