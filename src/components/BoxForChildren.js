

const BoxForChildren = ({children}) => {

    const styles = {border:'green 2px solid', padding: '20px', margin: '10px'}
    
      return (
        <div style={styles}>
           
            <h3>Box Header</h3>
            <h3>Middle</h3>
            <h3>Box Footer</h3>
            {children} {/* el children es lo que esta adentro de BoxForChildren en el archivo app.js, children TECNICAMENTE es un array, pero si es solo 1 elemento, es un ELEMENTO, es un array cuando es mas de 1 elemento */}
            </div>
      )
    }
    
    export default BoxForChildren