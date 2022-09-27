const Button = ({title,text,background,onClick}) => {
    return <button style={{color:text,backgroundColor:background}} onClick={onClick}>{title}</button>
}

export default Button