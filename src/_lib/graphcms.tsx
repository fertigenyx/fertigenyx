import { GraphQLClient } from 'graphql-request';

const endpoint: string = process.env.NEXT_PUBLIC_GRAPHCMS_URL || '';
const graphcms = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
  },
});

export default graphcms;
