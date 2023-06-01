type Person= {
  firstName: string;
  middleName?: string;
  lastName: string;
  children?: JSX.Element;
  onClick?:()=>void
}
function Component1(props: Person) {
  return (
    <>
      <a>First name:{props.firstName} </a>
      <a>Middle name:{props.middleName} </a>
      <a onClick={props.onClick} style={{color:'red',cursor:'pointer'}}>Last name:{props.lastName} </a>
      {props.children}
    </>
  );
}

// with optional middleName
function Component2({ firstName, middleName='N/A',lastName }: Person) {
  return (
    <>
      <a>First name:{firstName} </a>
      <a>Middle name:{middleName} </a>
      <a>Last name:{lastName} </a>
    </>
  );
}

//default props. This is the best approach when Component has many properties
const defaultPerson: Partial<Person>= {
    middleName:'Vacare'
};
function Component3(propsIn:Person){
    const props = {...defaultPerson, ...propsIn};
    return (
        <>
          <a>First name:{props.firstName} </a>
          <a>Middle name:{props.middleName} </a>
          <a>Last name:{props.lastName} </a>
          {props.children}
        </>
      );    
}

function Component4(){
  return <h1>Header passed as children</h1>
}


export default function PropsPage() {
  return (
    <>
      <div className="pt-10">
        <Component1 firstName="Bruno" lastName="Tezine" onClick={()=>console.log('Event click received from Component1')}><a>children</a></Component1>
        <hr/>
        <Component2 firstName="Bruno" lastName="Tezine"/>
        <hr/>
        <Component3 firstName="Bruno" lastName="Tezine"><Component4/></Component3>
      </div>
    </>
  );
}
