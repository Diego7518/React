export const ItemNavbar = () => {
    return (
        <ul className="navList">
            <li>
                <a href="/">
                    <i className="fas fa-home"></i> Inicio
                </a>
            </li>
            <li>
                <a href="/studies">
                    <i className="fas fa-graduation-cap"></i> Estudios
                </a>
            </li>
            <li>
                <a href="/skills">
                    <i className="fas fa-code"></i> Habilidades técnicas
                </a>
            </li>
        </ul>
    )
}