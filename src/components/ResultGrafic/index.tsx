import { GraphicTable } from '../GraphicTable';
import { GraphicContainer, VoidListMessage } from './styles';

const database = [
  { id: 1, peso: 65, altura: 1.65, imc: 22.04, result: 'Peso normal' },
];

export const ResultGraphic = () => {
  return (
    <GraphicContainer>
      {database.length > 0 ? (
        <GraphicTable data={database} />
      ) : (
        <VoidListMessage>
          Saiba agora se está no seu peso ideal!
        </VoidListMessage>
      )}
    </GraphicContainer>
  );
};
