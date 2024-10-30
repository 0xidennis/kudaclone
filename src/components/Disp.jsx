

export const Disp = (props) => {
  return (
    <div>
        <div className={`cards ${props.cards}`}>
            <img src={props.img} alt="" width={20} className={`img ${props.img}`}/>
            <p className={`text ${props.Text}`}>{props.text}</p>
        </div>
    </div>
  )
}

export default Disp
