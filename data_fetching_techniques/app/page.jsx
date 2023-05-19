import { getAllUsers } from '@/utils/features';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Users"
}

const page = async() => {
    const users = await getAllUsers();
    return (
        <div className='flex col g-4'>
            {
                users?.map(i => <Link key={i.id} href={`/user/${i.id}`}>{i.name} </Link>)
            }
        </div>
    );
};

export default page;