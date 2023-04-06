import React from 'react';
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
    return (
        <div className="py-5" style={{ background: '#ffd333', minHeight: '100vh' }}>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 position-relative" style={{ top: '100px' }}>
                <h4 className="text-center title">Forgot Password</h4>
                <p className="text-center">Please Enter your new password</p>
                <form action="">
                    <CustomInput type="password" label="New Password" i_id="pass" />
                    <CustomInput type="password" label="Confirm Password" i_id="confirmpass" />
                    <button
                        className="border-0 px-2 py-2 text-white fw-bold w-100 rounded-3"
                        style={{ background: '#ffd333' }}
                        type="submit"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Resetpassword;
