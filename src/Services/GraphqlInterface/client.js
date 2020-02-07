import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApplicationEndPoint } from "../../config";

export const apolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: ApplicationEndPoint
    }),
    cache: new InMemoryCache()
  });
};
