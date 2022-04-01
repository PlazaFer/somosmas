import parse from 'html-react-parser';

const ActivityContent = ({ content, className }) => {
    return (
        <>
            {parse(content)}
        </>
    )
}

export default ActivityContent