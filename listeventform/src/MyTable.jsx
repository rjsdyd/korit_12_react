export default function MyTable() {
  const data = [
    {id: 1, brand: '부가티', model: '시론'},
    {id: 2, brand: '롤스로이스', model: '스펙터'}, 
    {id: 3, brand: '포르쉐', model: '911틴'}
  ];
  return (
    <>
      <table>
        <tbody>
          {
            data.map(car => <tr key={car.id}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  );
}