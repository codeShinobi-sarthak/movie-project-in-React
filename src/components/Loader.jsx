import React from 'react';

const Loader = () => {
    return (
        <div className=" relative flex justify-center items-center w-full h-full">
            <div className=" absolute top-80 animate-spin rounded-full size-20 border-t-4 border-b-4 border-black"></div>
        </div>
    );
};

export default Loader;
