import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity() // Isto define a classe como uma tabela no banco de dados
export class User {
    @PrimaryGeneratedColumn() // Isto define a coluna como uma chave primária
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    passwordHash: string;

    @Column({default: 'client'})
    role: string; // 'client','admin','partner'

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date; 

    @Column({type: 'timestamp', nullable: true})
    updatedAt: Date; 

}
