import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
  }

  render() {
        let {name,age} = this.props;

        return(
          <>
            <section>
                <p>
                    Tu primer nombre: {name}
                </p>
            </section>
            <section>
                <p>
                    Tu edad: {age}
                </p>
            </section>
          </>
        )
  }
}

export default Form