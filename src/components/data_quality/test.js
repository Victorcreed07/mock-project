
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