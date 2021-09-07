
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../Navbar/Header';
import Sidebar from '../Sidebar/Sidebar';
import './PostNews.css';

const PostNews = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const addProductData = {
            title: data.title,
            description: data.description,
            category: data.category,
            img: imageURL
        };
        const url = `https://aqueous-hollows-04382.herokuapp.com/addNews`;
        console.log(addProductData);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProductData)
        })
            .then((res => console.log('image has benn posted', res)))
        window.location.reload(false);
    };

    const handleImageUpload = product => {
        console.log(product.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '259cb8627a0351959a521727bfc6a942');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <Header/>
            <section className="row">
                <div className="col-md-3 mt-3=2"><Sidebar></Sidebar></div>
                <form className="col-md-9 mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Post News</h1>
                    <br />
                    <br />
                    <h4>News Title</h4>
                    <input name="title" placeholder="Enter news title" ref={register} />
                    <br />
                    <br />
                    <h4>News Description</h4>
                    <textarea rows="3" cols="50" name="description" placeholder="Enter Description" ref={register} />
                    <br />
                    <br />
                    <h4>News Category</h4>
                    <input name="category" placeholder="world / national / sports " ref={register} />
                    <br />
                    <br />
                    <h4>News Picture</h4>
                    <input name="" type="file" onChange={handleImageUpload} />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </section>
        </div>
    );
};

export default PostNews;