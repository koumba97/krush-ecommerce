import './Form.scss';

interface IProps {
    children: any;
    onSubmit: Function;
}
const Form = ({ children, onSubmit }: IProps) => {
    const handleSubmit = (event: Event) => {
        event.preventDefault();
        console.log('okok');

        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {children}
        </form>
    );
};

export default Form;
