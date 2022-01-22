import PropTypes from 'prop-types'

const onClick = (e) => {
    console.log(e)
}
const button = ({ color, text }) => {
  return (
       <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
  )
};


export default button;
