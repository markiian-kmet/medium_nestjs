import { Column, Entity, BeforeUpdate, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articles')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  body: string;

  @Column('simple-array')
  tagList: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: false })
  favorited: boolean;

  @Column({ default: 0 })
  favoritedCount: number;

  @BeforeUpdate()
  updateTimeStamp() {
    this.updatedAt = new Date();
  }
}