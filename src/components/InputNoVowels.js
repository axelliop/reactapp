import React from 'react'

/*synthetic events, similar al DOM  */


const InputNoVowels = () => {

    const handler = (event) => {
        console.log('se tecleo' + event.key); /* me avisara que "se tecleo" + la letra que aprete */
        const notAllowed = ['a','e','i','o','u'] /* vocales que no estan permitidas */

        if (notAllowed.includes(event.key.toLowerCase() )) { /* mi constante de notallowed lo hace al minuscula, inclue el evento, la key del mismo que seria la tecla que tecleo */
        event.preventDefault() /* el prevent default le quita la funcionalidad a las letras, no apareceran en el input */
        }


    }

  return (
    <div className='m-5'>

        <input onKeyDown={handler} type="text" className='border border-gray-400'/> {/* paso por la funcion handler a manera de referencia */}

    </div>
  )
}

export default InputNoVowels