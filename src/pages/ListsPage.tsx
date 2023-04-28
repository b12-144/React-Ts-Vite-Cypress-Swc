
const products:any[] = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

export default function ListsPage(){

    const list=products.map(product=>{
        return <li key={product.id}>{product.title}</li>
    });

    return <ul>{list}</ul>
}