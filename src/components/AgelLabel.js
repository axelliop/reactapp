//rafce

const AgeLabel = ({age}) => { /* desestructuro age indicado en app.js */
    const styles = {
        border: 'solid red 2px',
        padding: '5px'}
  return (

    <div>
        <p style={styles}>edad: {age}</p>
        </div>
  )
}

export default AgeLabel //me importa por DEFAULT esta funcion (AgeLabel)