import {
  TableBody,
  TableContainer,
  TableData,
  TableHeader,
  TableHeadRow,
  TableRow,
} from './styles';

const tableheadsList = ['Peso', 'Altura', 'IMC', 'Resultado'];

export type TableData = {
  id: number;
  peso: number;
  altura: number;
  imc: number;
  result: string;
};

type GraphicTableProps = {
  data: TableData[];
};

export const GraphicTable = ({ data }: GraphicTableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        {tableheadsList.map((item) => (
          <TableHeadRow key={item} className={item}>
            <td>{item}</td>
          </TableHeadRow>
        ))}
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableData>{item.peso}</TableData>
            <TableData>{item.altura}</TableData>
            <TableData>{item.imc}</TableData>
            <TableData>{item.result}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
