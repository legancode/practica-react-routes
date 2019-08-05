import React from 'react'

const withLoader = (propComponent) => (WrappedComponent) => {
    return class WithLoader extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            console.log(this.props)
            return (
                this.props[propComponent]
                    ? <div>Cargando...</div>
                    : <WrappedComponent {...this.props} message="Soy una prop que viene de parte de un HOC" />
            )
        }
    }
}

export default withLoader
