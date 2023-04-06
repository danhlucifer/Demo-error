import CustomInput from '../components/CustomInput';

const AddCat = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Category</h3>
            <form action="">
                <CustomInput type="text" label="Add Category" />
                <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
                    Add Category
                </button>
            </form>
        </div>
    );
};

export default AddCat;
