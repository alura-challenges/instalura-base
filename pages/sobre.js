import { GraphQLClient, gql } from 'graphql-request';
import AboutScreen from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const TOKEN = '0aebf8f7bcffee44fbe032cf0e9cde';
  const DatoCMSURL = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;

  const messages = await client.request(query);

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
