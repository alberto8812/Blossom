import { Column, Model, Table, DataType } from 'sequelize-typescript';

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
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    createdAt: Date;
    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    updatedAt: Date;

}