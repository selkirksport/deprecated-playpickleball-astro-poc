import React from 'react';
import { useStore } from '@nanostores/react';
import { filterStore } from '../../stores/filterStore';
import Card from '../Card/Card.tsx';
import styles from './PostList.module.scss';

interface Post {
  article_slug: string;
  article_title: string;
  article_desc: string;
  article_thumbnail: string;
  categories: string[];
}

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  const filter = useStore(filterStore);

  const filteredPosts = posts.filter(post =>
    post.article_title.toLowerCase().includes(filter) ||
    post.categories.some(category => category.toLowerCase().includes(filter))
  );
  return (
    <ul className={styles.postsGrid} role="list">
      {filteredPosts.map((post) => (
        <Card
          key={post.article_slug}
          href={post.article_slug}
          title={post.article_title}
          description={post.article_desc}
          thumb={post.article_thumbnail}
          categories={post.categories}
        />
      ))}
    </ul>
  );
};

export default PostList;
