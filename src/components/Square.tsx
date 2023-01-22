import { Button } from 'react-bootstrap'

type SquareTypes = {
    value: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Square = ({ value, onClick }: SquareTypes) => {
    return (
        <Button
            onClick={onClick}
            className='m-1 p-2 square_btns'
            style={{
                width: '100px',
                height: '100px',
                fontSize: '3rem'
            }}
        >
            <div className='text-warning'>{value}</div>
        </Button>
    )
}

export default Square