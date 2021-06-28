import React, { Fragment } from 'react'

const Membre = ({ nom, age, children }) => {
    console.log()
    //const  Membre = (props) =>{   
    //pour faire qlq chose qui bouge 
    // const name = props.nom //'antho'
    // console.log(props)
    return (
        <Fragment>
            <h2 style={{
                backgroundColor: age < 10 ? 'pink' :'purple',
                color:  age < 10 ? 'black': 'white'
            }}>{nom.toUpperCase()} : {age} ans
            </h2>
            {children ? <p>{children}</p> : <Fragment />}
        </Fragment>

        //ici avec les {}on a afficher membre de ma famille:antho
        //name.toUpperCase pour le mettre en majuscule
    )
}
export default Membre