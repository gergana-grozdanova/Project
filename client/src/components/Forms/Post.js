import React, { Component } from 'react';
import '../Forms/Forms.css';


class Post extends Component {
    render() {
        return (
            <>
            <section >
            <h2 className="create-post-t">Create new post</h2>
            <form>
                <div className="container">
                    <label for="uname"><b>Destination</b></label>
                    <input type="text" placeholder="Enter Destination" name="uname" required />

                    <label for="psw"><b>Description</b></label>
                    <input type="password" placeholder="Enter Description" name="psw" required />

                    <label for="psw"><b>Photo from the adventure </b></label>
                    <input type="file" id="myFile" name="filename"/>

                    <button type="submit">POST</button>
                </div>
            </form>
        </section>
            </>
        );
    }
}

export default Post;