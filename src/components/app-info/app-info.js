import './app-info.css'
const AppInfo = ({info}) => {
    const increased = info.filter(item => item.increase).length
    return (
        <div className='app-info'>
            <h1>Учет сотрудников в компании {info.length}</h1>
            <h2>Общее число сотрудников: {increased} </h2>
            <h2>Премию получат: </h2>
        </div>
    );
};

export default AppInfo;