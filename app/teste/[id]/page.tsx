"use client"; // Necessário para habilitar hooks do lado do cliente

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface PageProps {
    params: {
      id: string;
    };
}

interface BodyData {
    name: string;
    age: number;
}

const Test = ({ params }: PageProps) => {
    const searchParams = useSearchParams();
    const { id } = params;
    const [bodyData, setBodyData] = useState<BodyData | null>(null);

    useEffect(() => {
        const name = searchParams.get('name');
        const age = searchParams.get('age');
        if (name && age) {
            setBodyData({ name, age: parseInt(age) });
        }
    }, [searchParams]);

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
 
export default Test;