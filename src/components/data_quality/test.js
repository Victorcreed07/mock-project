
linear-gradient(55deg,#4E75B9 30%,#5CBF98 90%);



    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {column.map((i) => {

              return (
                <TableCell>i</TableCell>
                )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((i,index) => (
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                 {i}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





    
  {
    keys.map((i) => {


      return (

        <div className="entry">
    <div className="title">
      <h3>{i}</h3>
      
    </div>
    <div className="body">
      <p>Details</p>
      <ul>
        {values.map((j) => {

          

          return (
            <>
            {j.map((k) => {

              return (
                <li>{k.Filename}</li>
                )
            })}
            </>
            )

          
        })}


        <section className="seccctionn">
 
  <h1 className="tablehead">Best Models</h1>
  <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0" className="taaable">
      <thead>
        <tr>
          {Table.columns.map((i)=> {

            return (

              <th className="theaddd">{i}</th>
              )
          })}
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        {/* <tr> */}
        {/*   <td>AAC</td> */}
        {/*   <td>AUSTRALIAN COMPANY </td> */}
        {/*   <td>$1.38</td> */}
        {/*   <td>+2.01</td> */}
        {/*   <td>-0.36%</td> */}
        {/* </tr> */}
        {/* <tr> */}
        {/*   <td>AAD</td> */}
        {/*   <td>AUSENCO</td> */}
        {/*   <td>$2.38</td> */}
        {/*   <td>-0.01</td> */}
        {/*   <td>-1.36%</td> */}
        {/* </tr> */}
        {/* <tr> */}
        {/*   <td>AAX</td> */}
        {/*   <td>ADELAIDE</td> */}
        {/*   <td>$3.22</td> */}
        {/*   <td>+0.01</td> */}
        {/*   <td>+1.36%</td> */}
        {/* </tr> */}
