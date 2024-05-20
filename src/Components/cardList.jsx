import React, { useState, useEffect, useCallback } from 'react';
import Card from './card';
import axios from 'axios';
import Sidebar from './sidebar';

function CardList() {
    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Setting initial state based on window size

    const fetchCats = useCallback(async () => {
        if (!hasMore || loading) return;
        setLoading(true);
        const url = `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=10`;
        const response = await axios(url, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'your-api-key'
            }
        });
        if (response.data.length === 0) {
            setHasMore(false);
        } else {
            setCats(prevCats => [...prevCats, ...response.data]);
            setPage(prevPage => prevPage + 1);
        }
        setLoading(false);
    }, [page, hasMore, loading]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        fetchCats();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [fetchCats]);

    return (
        <div className='flex' style={{ height: '100vh' }}>
            {!isMobile && <Sidebar />}
            <div className={`flex flex-wrap items-start justify-start flex-1 overflow-auto ${isMobile ? 'w-full' : 'w-4/5'}`}>
                {cats.map(cat => (
                    <Card key={cat.id} cat={cat} />
                ))}
                {loading && <div className="loader">Loading...</div>}
            </div>
        </div>
    );
}

export default CardList;
