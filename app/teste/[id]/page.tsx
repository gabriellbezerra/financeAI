"use client"; // Necessário para habilitar hooks do lado do cliente

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; //Outra forma de utilizar rotas, aparentemente necessário para transferir informações via body de uma página para outra.

interface PageProps {
    params: {
      id: string;
    };
}

interface BodyData {
    name: string;
    age: number;
}

const test = ({ params }: PageProps) => {

    const router = useRouter();
    const { id } = params;
    const [bodyData, setBodyData] = useState<BodyData | null>(null);

    useEffect(() => {
        // Verifica se os dados extras estão no state da navegação
        if (router.state) {
            setBodyData(router.state as ExtraData);
        }
      }, [router.state]);

      return (
        <div>
          <h1>ID: {id}</h1>
          {bodyData ? (
            <div>
              <p>Name: {bodyData.name}</p>
              <p>Age: {bodyData.age}</p>
            </div>
          ) : (
            <p>No additional data provided</p>
          )}
        </div>
      );
};
 
export default test;