import './Form.scss';

interface IProps {
    children: any;
    onSubmit: Function;
}
const Form = ({ children, onSubmit }: IProps) => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {children}
        </form>
    );
};

export default Form;
