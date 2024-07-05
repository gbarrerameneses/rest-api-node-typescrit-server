import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

// Creación de tablas y columnas
@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string

    @Column({
        type: DataType.FLOAT(6, 2)
    })
    price: number

    @Default(true) // va ser para agregarle un valor que no esté presente una vez que enviemos el request, se coloca antes de la columna
    @Column({
        type: DataType.BOOLEAN
    })
    availability: boolean
}
export default Product