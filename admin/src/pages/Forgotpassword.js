import React from 'react';
import CustomInput from '../components/CustomInput';

const Forgotpassword = () => {
    return (
        <div className="py-5" style={{ background: '#ffd333', minHeight: '100vh' }}>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 position-relative" style={{ top: '100px' }}>
                <h4 className="text-center title">Forgot Password</h4>
                <p className="text-center">Please Enter your register email to get reset password mail.</p>
                <form action="">
                    <CustomInput type="text" label="Email Address" i_id="email" />
                    <button
                        className="border-0 px-2 py-2 text-white fw-bold w-100 rounded-3"
                        style={{ background: '#ffd333' }}
                        type="submit"
                    >
                        Send Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Forgotpassword;
