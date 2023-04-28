import ApolloClientPage from './ApolloClientPage';
import { graphql } from "../gql/gql";
import { useQuery } from '@apollo/client';

//query cannot be anonymous in order to work typed. Execute npm run code-gen after creating the query. 
const allProductsQuery = graphql(/* GraphQL */ `
    query ProductsTypedQuery{
          products{
              name
              price
          }
      }
`);

export default function ApolloClientPageTyped(){
    const {loading, data } = useQuery(allProductsQuery,{ variables: {}});
    //console.log('data:',data)
      return <>
       <div>
        {data && <ul>{data.products?.map((e:any, i:number) => e && <li key={i}>{e.name}</li>)}</ul>}
      </div>
      </>
}