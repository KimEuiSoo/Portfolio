// src/hooks/useCollection.ts
import { useState, useEffect } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { fireStore } from '../firebase';

// 제네릭 T를 사용하여 어떤 타입의 데이터든 받을 수 있게 만듭니다.
export const useCollection = <T = DocumentData>(collectionName: string) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const collectionRef = collection(fireStore, collectionName);
                const querySnapshot = await getDocs(collectionRef);

                const result: T[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as T[];

                setData(result);
            } catch (err) {
                setError(err);
                console.error(`Error fetching ${collectionName}:`, err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [collectionName]);

    return { data, loading, error };
};