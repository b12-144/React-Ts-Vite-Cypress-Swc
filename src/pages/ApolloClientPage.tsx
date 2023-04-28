import React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql } from '@apollo/client';
import { Product } from '../gql/graphql';
  
const allProductsQuery = gql`
    query{
          products{
              name
              price
          }
      }
`;

export default function ApolloClientPage(){
  const { data } = useQuery(allProductsQuery);
  console.log('data:',data)
    return <>
     <div>
      {data && <ul>{data.products?.map((e:any, i:number) => e && <li key={i}>{e.name}</li>)}</ul>}
    </div>
    </>
}