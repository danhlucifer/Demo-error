import CustomInput from '../components/CustomInput';

const AddBrand = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add Brand</h3>
            <form action="">
                <CustomInput type="text" label="Add Brand" />
                <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
                    Add Brand
                </button>
            </form>
        </div>
    );
};

export default AddBrand;
