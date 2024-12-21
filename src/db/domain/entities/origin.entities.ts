import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'origins' })
export class origins extends Model<origins> {
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

}