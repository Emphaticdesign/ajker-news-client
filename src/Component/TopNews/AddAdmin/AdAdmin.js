import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../Navbar/Header';
import Sidebar from '../Sidebar/Sidebar';

const AdAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email
        }
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('admin added successfully')
                }
            })
        window.location.reload(false);

    };
    return (
        <div className="">
            <Header />
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <h2>Add Admin Page</h2>
                    <br />
                    <br />
                    <div className="text-align-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4>New Admin Name</h4>
                            <input name="name" required placeholder="new admin name" ref={register} />
                            <br />
                            <br />
                            <h4>New Admin Email</h4>
                            <input name="email" placeholder="new admin email" ref={register} />
                            <br />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdAdmin;