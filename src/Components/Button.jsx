import ButtonSvg from "../assets/svg/ButtonSvg.jsx";


const Button = ({className, href, children, white, px }) => {
    const classes = `button relative inline-flex items-center justify-center h-11 w-32 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'}`;

    const renderButton = () =>(
        <button className={classes}>
            <span>{children}</span>
            {ButtonSvg()}
        </button>
    )

    return renderButton();
};

export default Button;