function PrettyTemps (temperature) {
    return (
        <span className={temperature>90?'text-danger':temperature<40?'text-primary':'text-dark'}>
            {temperature}&deg;
        </span>
    )
}

export default PrettyTemps
