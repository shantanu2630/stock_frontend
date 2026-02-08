import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useNavigate } from "react-router-dom";

interface ResponseData {
  indexSymbol: string;
  last: number;
  percentChange: number;
  variation: number;
}

interface Props {
  data: ResponseData[] | null;
}

type Data = ResponseData & { id: number };

type Order = "asc" | "desc";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  { id: "indexSymbol", label: "Index", numeric: false },
  { id: "last", label: "Last", numeric: true },
  { id: "percentChange", label: "% Change", numeric: true },
  // { id: "variation", label: "Change", numeric: true },
];

function IndicesList({ data }: Props) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("last");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const navigate = useNavigate();

  const rows: Data[] = React.useMemo(() => {
    if (!data) return [];
    return data.map((item, index) => ({
      id: index + 1,
      ...item,
    }));
  }, [data]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStockDetails = (indexSymbol: string) => {
    navigate(`/test?symbol=${indexSymbol}`);
  };

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows],
  );
  // console.log(headCells)

  return (
    <Box sx={{ width: "90%" }}>
      <Paper sx={{ width: "100%", mb: 2, ml: 2 }}>
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={(event) => handleRequestSort(event, headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {visibleRows.map((row) => (
                <TableRow
                  hover
                  key={row.id}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleStockDetails(row.indexSymbol)}
                >
                  <TableCell>
                    <Box
                      component="span"
                      sx={{
                        color:
                          row.percentChange < 0 ? "error.main" : "success.main",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      {row.indexSymbol}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Box
                      component="span"
                      sx={{
                        color:
                          row.percentChange < 0 ? "error.main" : "success.main",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      {row.last}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Box
                      component="span"
                      sx={{
                        color:
                          row.percentChange < 0 ? "error.main" : "success.main",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      {row.percentChange}% ({row.variation})
                    </Box>
                  </TableCell>
                  {/* <TableCell align="right">{row.variation}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default IndicesList;
