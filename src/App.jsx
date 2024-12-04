import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./Components/Button.jsx";
const App = () =>{
    return (
        <div>
            <h1 className='h1'>Hello There</h1>
            <div className='container'>
                <Button className='pt-7' href='#login'>
                    Something
                </Button>
            </div>
            <ButtonGradient />
        </div>
    );
};

export default App;