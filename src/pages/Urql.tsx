import { useQuery, gql } from "urql";
import { graphql } from "../gql/gql";
import React from 'react';

//query cannot be anonymous in order to work typed. Execute npm run code-gen after creating the query. 
const allProductsQueryTyped = graphql(/* GraphQL */`
  query ProductsQuery{
        products{
            name
            price
        }
    }
`);


export default function Urql(){

      const [{ data }] = useQuery({
        query: allProductsQueryTyped 
      });      

      return <>
        <div>
          {data && (
            <ul>
              {data.products?.map(
                (e, i:number) => e && <li key={i}>{e.name}. Price:{e.price}</li>
              )}
            </ul>
          )}
        </div>

        </>
}