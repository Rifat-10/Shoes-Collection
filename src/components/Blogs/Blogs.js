import React from 'react';

const Blogs = () => {
    return (
        <div className="start-25">
            <h3>1.What is the context API?</h3>
            <p>Ans:  A React app can use the React Context API to generate global variables that can be passed around.<br /> This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on.<br /> Context is also marketed as a simpler, lighter way to Redux state management.<br />

                Context API is a (sort of) new feature in React 16.3 that <br /> allows you to easily and lightly communicate state across the entire project (or part of it)..</p><br /><br />

            <h3>2.What is the semantic tag??</h3>
            <p>Ans: Semantic HTML elements are those that express their meaning in a way that is both human and machine readable. <br /> Header, footer, and article elements are all deemed semantic since they accurately explain the element's purpose and the sort of material it contains.<br />
                Both the browser and the developer can understand the meaning of a semantic element. Non-semantic elements include div and span, which provide no information about the content.<br /> form, table, and article are examples of semantic components.<br />Clearly describes its content.</p><br /><br />

            <h3>3.What is the difference between inline block or inline block element?</h3>
            <p>Ans: The difference between inline block or inline block element are given below: <br />

            inline The element doesn't start on a new line and only occupy just the width it requires.<br /> You can't set the width or height. inline-block It's formatted just like the inline element, where it doesn't start on a new line.<br /> BUT, you can set width and height values.

            </p>
        </div>
    );
};

export default Blogs;