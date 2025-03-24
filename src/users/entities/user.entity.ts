import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity() // Isto define a classe como uma tabela no banco de dados
export class User {
    @PrimaryGeneratedColumn() // Isto define a coluna como uma chave primária
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}
