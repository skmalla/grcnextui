import columnFilter from "../../../../../../Common/UI/TableCommonComponents/ColumnFilter/ColumnFilter";

export const COLUMNS = [
  {
    Header: "S No.",
    accessor: "id",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "KRI Name",
    accessor: "risk_event_code",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "KRI Owner",
    accessor: "risk_type",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "Date Locked",
    accessor: "risk_event",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "Assignee",
    accessor: "basel_risk_category",
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: "No. Of Days Locked",
    accessor: "basel_risk_objective",
    Filter: columnFilter,
    disableFilters: true,
  },
];
