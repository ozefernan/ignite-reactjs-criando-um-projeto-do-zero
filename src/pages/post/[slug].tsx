import { GetStaticPaths, GetStaticProps } from 'next';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
  return <h1>TEste</h1>;
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

export const getStaticProps: GetStaticProps = async ({ req, params }) => {
  const prismic = getPrismicClient({ req });
  const { slug } = params;

  const response = await prismic.getByUID('posts', String(slug), {});

  console.log('!@#', response);
  // const post = {
  //   slug,
  //   title: RichText.asText(response.data.title),
  //   content: RichText.asHtml(response.data.content),
  //   updatedAt: new Date(response.last_publication_date).toLocaleDateString(
  //     'pt-BR',
  //     {
  //       day: '2-digit',
  //       month: 'long',
  //       year: 'numeric',
  //     }
  //   ),
  // };

  // return {
  //   props: { post },
  // };
};
