import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredRedList, getStoredWishList } from '../../utility/AddToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const AllBooks = useLoaderData()
    const [sort, setSort] = useState('');
    useEffect(()=>{
        const StoredReadList = getStoredRedList()
        const StrodReadListInt = StoredReadList.map((id)=> parseInt(id));
        const ReadListBook = AllBooks.filter(book => StrodReadListInt.includes(book.bookId))
        setReadList(ReadListBook)
        // console.log(StoredReadList, AllBooks)
    },[]);
    useEffect(()=>{
        const StrodedWishList = getStoredWishList();
        const StrodWishListInt = StrodedWishList.map(id=> parseInt(id));
        const WishListBook = AllBooks.filter(book => StrodWishListInt.includes(book.bookId));
        setWishList(WishListBook)
        // console.log(StrodedWishList, AllBooks)
    },[]);

    const handleSort = sortType => {
        setSort(sortType);

        // 
        if(sortType === 'No of pages'){
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }

        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }

    }

    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-8'>Listed Books</h1>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `Sort by: ${ sort }`  : 'Sort by'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('No of pages')}><a>No of pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List{wishList.length}</h2>
                    {
                        wishList.map(book => <Book  key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;