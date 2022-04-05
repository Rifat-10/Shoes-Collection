import React from 'react';

const Blogs = () => {
    return (
        <div className="start-25">
            <h3>1.How does Javascript Work?</h3>
            <p>Ans:  JS is a programming language that only allows one task or line of code to be executed at a
                        time. It's a well-defined programming language <br /> that employs dynamic typing and, like most
                        scripting languages, performs type security checks during execution. JavaScript is a programming
                        language <br /> for the client side that is one of the most efficient and widely used scripting
                        languages. The client-side <br />scripting language refers to the fact that it runs on the
                        client's side of the web browser nevertheless, the client's web browser must support or enable,
                        JavaScript as well.<br /> Most current web browsers that have a JavaScript engine now support JavaScript.</p><br /><br />

            <h3>2.What does Javascript evenloop do??</h3>
            <p>Ans:  JavaScript's runtime architecture is based on an event loop, which runs the code, collects
                        and processes events, and runs queued sub-tasks.<br />

                        At some point during the event loop, the runtime starts treating the messages on the queue,
                        starting with the oldest. To do so, the message is removed from <br />the queue and the relevant
                        function is called, with the message as an input parameter. Calling a function, as it always
                        does, creates a new stack frame for that function's use.<br />

                        The functions are executed until the stack is once again empty. The event loop will then move on
                        to the next message in the queue to process.

            </p><br /><br />

            <h3>3.What is the difference between Local Storage and Session Storage?</h3>
            <p>Ans: The difference between Local Storage and Session Storage are given below: <br />

The store is persistent across browser sessions with <span class="fw-bold">localStorage</span>. <br />
When the page session expires, <span class="fw-bold">Session Storage</span> is cleared. <br />
<span class="fw-bold">local Storage</span> has a storage capacity of 5MB/10MB. <br />
<span class="fw-bold">Session Storage</span> has a 5MB storage capacity. <br />
Expiration of <span class="fw-bold">localStorage</span> is Never. <br />
On tab closing,<span class="fw-bold">Session Storage</span> expires.

            </p>
        </div>
    );
};

export default Blogs;