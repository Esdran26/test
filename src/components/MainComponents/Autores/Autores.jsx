import AutorInformation from './Autor';

// eslint-disable-next-line react/prop-types
const Autores = ({url}) => {

    return (
        <div>
      <AutorInformation url={url} title={'Autores'}></AutorInformation>
            
        </div>
    );
}

export default Autores;
