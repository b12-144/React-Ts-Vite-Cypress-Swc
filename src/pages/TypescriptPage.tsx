import styled from "@emotion/styled";

function testGenerics<Type>(arg: Type): Type {
    return arg;
}

function testUnion(id: number | string) {
    return "Your ID is: " + id;
  }


export default function TypescriptPage(){

    return (
        <ul>
            <li className="text-pink-600 mt-5">Testing Generics...</li>
            <li>{testGenerics<string>('Bruno')}</li>
            <li className="text-pink-600 mt-5">Testing Union...</li>
            <li>{testUnion('123')}</li>
        </ul>
    );
}
