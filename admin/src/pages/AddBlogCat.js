import React from 'react';
import CustomInput from '../components/CustomInput';

const AddBlogCat = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Blog Category</h3>
            <form action="">
                <CustomInput type="text" label="Add Blog Category" />
                <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
                    Add Blog Category
                </button>
            </form>
        </div>
    );
};

export default AddBlogCat;
