import React from 'react';
import styles from './Card.module.scss';

interface Props {
  title: string;
  description: string;
  thumb: string;
  href: string;
  categories: string[];
}

const Card: React.FC<Props> = ({ href, title, description, thumb, categories }) => {
  return (
    <li className="link-card">
        <article className={styles.articleCard}>
          <a href={`/posts/${href}`}>
            <header className={styles.header}>
              <img
                className={styles.header__thumb}
                src={thumb}
                alt="Group of people playing pickleball"
              />
            </header>
          </a>
          <section className={styles.articleCard__content}>
            <h2 className={styles.articleCard__title}>{title}</h2>
            <p className={styles.articleCard__description}>{description}</p>
            <footer className={styles.articleCard__tags}>
              {categories.map((category, index) => (
                <a key={index} href="#" className={styles.tag}>{category}</a>
              ))}
            </footer>
          </section>
        </article>
    </li>
  );
}

export default Card;
