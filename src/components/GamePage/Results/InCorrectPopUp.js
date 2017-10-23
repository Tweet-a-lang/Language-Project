import React from 'react';


class InCorrectPopUp extends React.Component {
    render() {
        return (
            <div>
                <p>Oops not matched!</p>
                <button>See Answer</button>
                <button>Try Again</button>
                <button>Next Tweet</button>
         </div>
        )
    }
}

export default InCorrectPopUp;